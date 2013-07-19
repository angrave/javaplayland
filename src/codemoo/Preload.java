package codemoo;

import bsh.Interpreter;
import bsh.EvalError;

public class Preload {
    public static Interpreter interpret = null;
    public static void main (String[] args) {
        Preload.interpret = new Interpreter();
        if (args.length > 0) {
            try {
                Preload.interpret.eval(args[0]);
            }
            catch (bsh.EvalError e) {
                System.out.print("Threw " + e);
            }
        }
        return;
    }
}