echo off
echo Note, you need to have JDK 6 for this. Doppio is Java 6 only.
echo In addition, you will have to add javac to your Path system variable in Windows.
echo This will typically be C:\Program Files\Java\jdk1.6.0_45\bin

echo on
javac -classpath ..\web\doppio-jvm\vendor\classes -d ..\web\doppio-jvm\vendor\classes codemoo\Preload.java codemoo\Run.java codemoo\RunGame.java