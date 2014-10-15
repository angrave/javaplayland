#!/bin/bash
#This will install everything needed to run code moo locally.

echo "We will install a few things and due to the node and nodejs package conflict we will use purge.
If you are experienced with linux, look at the script first. If you dont have these packages already 
/ don't care/ just trying to get code moo to work, type y. Type anything else to exit."

yes="y"

read input
if [[ "$input" != "$yes" ]]; then
	exit 1
fi

if [ "$(id -u)" != "0" ]; then
	echo "You need to run this as root."
fi

#We need make version 3.82 at least.
make_current=$(make -v | grep -o [0-9]"\."[0-9][0-9])

#If the version 3.82 is no longer available, then the variable make_version should be updated.
make_version="3.82"

make_name="make-${make_version}.tar.gz"
make_url="ftp://ftp.gnu.org/gnu/make/${make_name}"

#If the project happens to require a higher version of make, the make_neeeded variable
#will need to be updated.
make_needed="3.82"

if [[ "$make_current" < "$make_needed" ]]; then
	#We need to update make
	echo "Deleting current make and getting a newer version"
	if wget --spider -q "$make_url"; then
		if [ ! -f "$make_name" ]; then
			wget "$make_url"
		fi
		#We will delete current make then extract and install new make
		apt-get remove make
		tar -zxvf "$make_name"
		folder="make-${make_version}"
		cd ./"$folder"
		./configure
		make install
		cd ../
		#Delete the files we downloaded
		rm "$make_name"
		rm -rf "$folder"
	else
		echo "The other make version couldn't be found. The url in the script needs to be updated."
		echo "I clearly stated which line should be changed in the script."
		exit 1
	fi
fi

echo "Installing openjdk-6-jre"
apt-get -y install openjdk-6-jre

apt-get update

#We need this step due to the package name conflict
apt-get --purge remove node
apt-get --purge remove nodejs

echo "Installing nodejs"
apt-get -y install nodejs

echo "Installing npm"
apt-get -y install nodejs npm

echo "Installing coffescript"
npm install -g coffee-script

echo "Installing git"
apt-get -y install git-core
git init

#We will also install apache to be able to locally work with code moo
echo "Installing apache"
apt-get -y install apache2

#We will download the javaplayland project from github and extract it to the apache folder

cd /var/www
git clone http://github.com/milanocookies93/javaplayland.git
coffee -c /var/www/javaplayland

echo "If you are seeing this then everything should be okay. Apache should be running now and also
start during startup."
echo "You can access your local version by typing http://localhost/javaplayland/web/ in your browser."
echo "Remember that you need to compile the coffeescript files everytime you make a change to them.
You can do this by typing 'coffee -c /var/www/javaplayland' into a terminal."
