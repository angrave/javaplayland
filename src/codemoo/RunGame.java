package codemoo;

import bsh.Interpreter;
import bsh.EvalError;

public class RunGame {
    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("No Code Given to Run!");
            return;
        }
        if (Preload.interpret == null) {
            System.out.println("Interpreter Not Set Up!");
            return;
        }
		
        try {
            Preload.interpret.eval(args[0]);
        }
        catch (bsh.EvalError e) {
            System.out.print("Threw " + e);
        }
		finally{
		//This always needs to run (for now).
		//This is because even if the Java code cannot be interpreted, we need to indicate we finished
		//In the future, we may want to indicate that there was a compile error
			classes.doppio.JavaScript.eval("codeland.currentGame.commandMap.finishedParsingStartGame()");
		}
        return;
    }
}