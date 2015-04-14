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
			classes.doppio.JavaScript.eval("codeland.currentGame.commandMap.finishedParsingStartGame()");
        }
        catch (bsh.EvalError e) {
            //classes.doppio.JavaScript.eval("console.log(\"" + e +"\")");
			classes.doppio.JavaScript.eval("codeland.currentGame.commandMap.compileError(\"Check your code at " + String.valueOf(e.getErrorLineNumber()) + "!\")");
        }

        return;
    }
}