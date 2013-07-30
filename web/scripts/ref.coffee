window.inject = (d) ->

	d.innerHTML = '<h1>First Steps</h1>
	<p class="rp">&nbsp&nbsp&nbsp&nbspWhen first looking at <tt>code</tt>, it can be very confusing and disorienting because it is so different from conventional human language.  Thankfully, all programming languages follow a lot of the same conventions and are very similar.  Once you understand your first language, picking up another will become a breeze, and something you will have to do quickly and often if you program professionally.  In these regards, <tt>Java</tt> is no different.</p>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbspTo help you get acquainted with reading and writing scripts, there will be code snippets and examples in boxes littered throughout this text that you can compile and run by clicking the little button beneath them.  To start out, these boxes will not contain real code, but something called <tt>pseudocode</tt>.  <tt>Pseudocode</tt> is halfway between a programming language and a normal human language, it allows us to plan out and understand computer logic in a easier to read format.  Read further and the <tt>pseudocode</tt> examples will be replaced more and more by actual code as you learn about <tt>Java.</tt></p>
	
	<h2>Basic Formatting</h2>
	<p class="rp">&nbsp&nbsp&nbsp&nbspSyntax, or the laws and rules that govern whether or not code will work on a computer are very strict.  You must follow syntax rules exactly, or the code will not work.  Some basic things to become aware of are <tt>white space</tt>(spaces, tabs, and newlines) <tt>semicolons</tt>(;), <tt>brackets</tt>(<tt>(),{},[]</tt>), and <tt>comments</tt>(//,/*).  Understanding how these things are used and what they do is fundamental in both writing and reading code.</p>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbsp<tt>Comments</tt> are denoted on a single line by // or contained within /* Text Here! */.  <tt>Comments</tt> are used to leave notes to yourself about the code or to explain the functionality and thought process you intended for the code so that others can read and understand your program.</p>
	
	<div class="ex">//If you make a script with nothing but comments, the computer will think there\'s nothign there!</div>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbsp<tt>Spacing</tt> is what helps make code more readable, and though not always a convention that is necessary for code to run, code is already hard enough to read as it is.  Each line is typically used for a single command - when you start writing a new command you go to a new line, this also allows error reporting programs, or <tt>debuggers</tt>, to help you pinpoint your problem because they can tell you exactly what line the error is occurring on.</p>
	
	<div class="ex"></div>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbsp<tt>Tabs</tt> are used to create what is called <tt>indentation</tt>, which is very important.  Programming instructions are arranged in a hierarchy - that is, some instructions of code may have certain objects, pieces of memory, or other instructions that they have control of.  This is a form of <tt>Parent</tt> and <tt>Child</tt> relationship, a concept that will come up a lot in programming in different ways.  In this context, the <tt>child</tt> code will be directly underneath its <tt>parent</tt> code and <tt>indented</tt> with one more tab then the <tt>parent</tt> code is.</p>
	
	<div class="ex"></div>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbsp<tt>Semicolons</tt> are a very common feature in a lot of languages, and like newlines denote the end of a command.  Unlike newlines, however, <tt>semicolons</tt> are not optional, and if you are missing a semicolon somewhere in your code the whole thing won\'t work.  Chances are the only way to find the error will be to read through the whole thing looking for that one insignificant missing character, so its best to make semicolons an ingrained habit.</p>
	
	<div class="ex"></div>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbspBrackets perform a role similar to indentation.  They are used to create a hierarchy of <tt>parent</tt> and <tt>child</tt> relationships by grouping children inside of them that are of the same level in the hierarchy, also called <tt>siblings</tt>, and tying them to a parent.  Like semicolons they are also mandatory, if not implemented in the correct manner and place, your code will break.</p>
	
	<div class="ex"></div>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbspParenthetical brackets - () - are used for function parameter grouping, which we\'ll talk about later, and for order of operations when you perform math on things.  Squiggly brackets - {} - are used in conjunction with tabs and newlines to group lines of code under their parent code lines.  Square brackets - [] - are used specifically for a special kind of memory grouping called an <tt>Array</tt>, which will be covered in detail later.</p>
	<div class="ex"></div>

	<h2>Stored Information - Variables</h2>
	<p class="rp">&nbsp&nbsp&nbsp&nbspComputers only do exactly what they are told, and know only exactly what they are given at any point in time.  Variables are an integral tool that allow us to manipulate data and information: manipulating it, moving it around, and ensuring that the data is in the correct form and place at the correct time.  A variable is a virtual object that stores data, whether that data be a number, a string of characters, or a reference (in a sense, the location) of another object.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspVariables in Java must be type-set, that is, when created the variable will only be able to contain a specific sort of information.  A variable initialized to hold numbers will not hold words for instance.  To this end, there are many different types of variables, ones that can hold numbers of varying sizes and decimal place accuracies such as int, double, and long.  There are types that will hold single characters, such as char, and a special type of variable called a string that holds words and sentences by building on top of the basic variable functionalities.  Boolean variable types hold either true or false, simplistic, yet very useful and efficient.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspReference variables, more commonly called pointers, are variables that hold the location of constructs of information such as other variables, groups of variables, and many other things.  While their layered use can become confusing, developing the skills and understanding of how they function will be very helpful.  Pointers are an integral part of programming.</p>

	<h2>Expressions</h2>
	<p class="rp">&nbsp&nbsp&nbsp&nbspA lot of your time programming will be spent devising ways to extrapolate the important information held in the data, this is often done by solving what is called an expression.  An expression takes several inputs, a combination of variables and constants, and produces a single output.  Math, string manipulation, and boolean logic are all forms of expressions.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspOperators are functions that take exactly two inputs and produce one output, and are used to evaluate expressions.  The +,-,*,/,%,^ signs are all mathematical operators, more formally called the Arithmetic Operators.  For those unfamiliar with the % operator, it is modulus.  Modulus makes numbers act as if on a clock, they wrap around after a certain magnitude.  For example, if you wait 13 hours from noon, it will be 1 o\'clock.  13 % 12 = 1.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspRelational operators make a statement about equality between two operands, and then evaluate to the falsity or truthhood of the statement.  These are the ==(equals), !=(not equals), >(greater than), <(less than), <=(less than or equals), and >=(greater than or equals) operators.  Take careful note that the == operator and =, the assignment operator, are completely different.  The = operator will assign one value to another, usually variables, while the == operator checks to see if the two operands are equivalent.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspLogical operators perform what is called boolean logic, and concern whether a statement is true or false.  These operators include the &&(and),||(or), and !(not, one of the only operators to take only a single operand).  These are primarily used to direct conditional logic, the next subject.</p>

	<h2>Controlling Logic Flow - Conditionals</h2>
	<p class="rp">&nbsp&nbsp&nbsp&nbspCrucial to useful programs is our ability to endow computers with the ability to make choices based on the information that they are given.  This is done through conditionals, also called control statements, such as if, while, and for.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspIf statements are the most elementary of conditionals.  The if statement is given jurisdiction of some of its own instructions, indicated by some conventions discussed earlier (tabs, {} braces).  The if statement will check its condition, which ultimately evaluates to true or false.  If the statement is true, the if statements own set of instructions will be executed, otherwise they will be passed over.</p>
	
	<p class="rp">&nbsp&nbsp&nbsp&nbspIf statements can be further extended in influence and ability using the else statement.  Appended to an if statement, the else statement denotes instructions to be run if its partner if statement resolves to false.  The else statement can even branch to more if and else statements to create a nested tree of logic to accomodate the programs purpose.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspFor loops perform their commands a certain number of times.  They are traditionally given a variable which they increment each loop until the given condition is met, and the loop terminates.</p>

	<p class="rp">&nbsp&nbsp&nbsp&nbspWhile loops come in two forms, do while and while.  Do while will loop once no matter what, since it checks its condition after running.  While will check its condition before running, and may therefore not run at all depending.
	'