(*
  What survives when the damping disappears?
  PUBLICATION STATUS: NOT EXECUTED HERE. No saved kernel output is supplied.
  These inputs encode the independently proved statements in SOURCES.md.
  A future native run should retain this file, $Version, results and messages.
  No package, external request, arbitrary expression parser or quadrature is used.
*)

ClearAll[a, s, x, r, h, t, n, assumptions, closedF, dampedIntegral,
  cosineIntegral, transform, frequencyThenDamping, dampingThenFrequency,
  axisPath, diagonalPath, quadraticPath, undampedCosineCutoff,
  oppositeCutoffs, changedUndamped, changedRightSlope, changedLeftSlope,
  defaultWindow, defaultTails, defaultComparison, defaultDerivative,
  dampingReport];

assumptions = Element[{a, s}, Reals] && s > 0;
closedF = ArcTan[a/s];

dampedIntegral = Integrate[Exp[-s x] Sin[a x]/x, {x, 0, Infinity},
  Assumptions -> assumptions, GenerateConditions -> True];
cosineIntegral = Integrate[Exp[-s x] Cos[a x], {x, 0, Infinity},
  Assumptions -> assumptions, GenerateConditions -> True];
transform = LaplaceTransform[Sin[a x]/x, x, s,
  Assumptions -> assumptions, GenerateConditions -> True];

(* Explicit nesting: the INNER call takes the first limit.
   Do not infer a first-listed-first convention for a list of Limit rules. *)
frequencyThenDamping = Limit[
  Limit[closedF, a -> 0, Direction -> "FromAbove", Assumptions -> s > 0],
  s -> 0, Direction -> "FromAbove"];
dampingThenFrequency = Limit[
  Limit[closedF, s -> 0, Direction -> "FromAbove", Assumptions -> a > 0],
  a -> 0, Direction -> "FromAbove"];

axisPath = FullSimplify[closedF /. {a -> 0, s -> t}, Assumptions -> t > 0];
diagonalPath = FullSimplify[closedF /. {a -> t, s -> t}, Assumptions -> t > 0];
quadraticPath = FullSimplify[closedF /. {a -> t^2, s -> t}, Assumptions -> t > 0];

(* Ordinary derivative-integral failure is proved by finite cutoffs,
   not by assigning a regularized value to an infinite cosine integral. *)
undampedCosineCutoff = Integrate[Cos[a x], {x, 0, r},
  Assumptions -> a > 0 && r > 0];
oppositeCutoffs = FullSimplify[
  {(Sin[a r]/a) /. r -> (Pi/2 + 2 Pi n)/a,
   (Sin[a r]/a) /. r -> (3 Pi/2 + 2 Pi n)/a},
  Assumptions -> a > 0 && Element[n, Integers] && n >= 0];

(* Changed task: the s=0 identity has an independent integration-by-parts
   proof with vanishing boundary terms. No substitution into a 0 Log[Infinity]
   expression is made. The correct zero-frequency identity is Cos[0] == 1. *)
changedUndamped = Integrate[(1 - Cos[a x])/x^2, {x, 0, Infinity},
  Assumptions -> Element[a, Reals], GenerateConditions -> True];
changedRightSlope = Limit[(Pi Abs[a]/2)/a,
  a -> 0, Direction -> "FromAbove"];
changedLeftSlope = Limit[(Pi Abs[a]/2)/a,
  a -> 0, Direction -> "FromBelow"];

defaultWindow = (s r) /. {s -> 1/10000, r -> 200};
defaultTails = (4/(Abs[a] r)) /. {a -> 1/2, r -> 200};
defaultComparison = defaultWindow + defaultTails;
defaultDerivative = (Abs[h]/(2 s^2)) /. {h -> 1/10^10, s -> 1/10000};

dampingReport = <|
  "Source publication status" -> "UNEXECUTED at publication; this is a native companion input file",
  "Kernel version for this run" -> $Version,
  "Assumptions for damped formulas" -> assumptions,
  "Damped integral" -> dampedIntegral,
  "Agreement with proved formula" -> FullSimplify[dampedIntegral == closedF,
    Assumptions -> assumptions],
  "Damped cosine integral" -> cosineIntegral,
  "Derivative agreement" -> FullSimplify[D[closedF, a] == cosineIntegral,
    Assumptions -> assumptions],
  "Laplace transform with explicit conditions requested" -> transform,
  "Positive boundary" -> Limit[closedF, s -> 0,
    Direction -> "FromAbove", Assumptions -> a > 0],
  "Negative boundary" -> Limit[closedF, s -> 0,
    Direction -> "FromAbove", Assumptions -> a < 0],
  "Frequency first, then damping" -> frequencyThenDamping,
  "Damping first, then frequency" -> dampingThenFrequency,
  "Axis path" -> axisPath,
  "Diagonal path" -> diagonalPath,
  "Quadratic path" -> quadraticPath,
  "Quadratic-path nonuniformity gap" -> Limit[Pi/2 - quadraticPath,
    t -> 0, Direction -> "FromAbove"],
  "Ordinary cosine cutoff" -> undampedCosineCutoff,
  "Opposite cosine cutoff subsequences" -> oppositeCutoffs,
  "Changed undamped integral" -> changedUndamped,
  "Changed right and left slopes" -> {changedRightSlope, changedLeftSlope},
  "Exact default comparison budget" -> {defaultWindow, defaultTails,
    defaultComparison, defaultComparison < 1/10},
  "Separate derivative remainder budget" -> {defaultDerivative,
    defaultDerivative < 1/10}
|>;

Print[dampingReport];
dampingReport
