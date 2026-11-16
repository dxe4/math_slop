var e=`---
parent_id: book-applied-modeling-proof-reference
chapter_id: cooling-model-validation
title: "A cooling-model audit: fit, test and validate the computation"
level: undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
status: draft
---

# A cooling-model audit: fit, test and validate the computation {#section-1-a-cooling-model-audit-fit-test-and-validate-the-computa}

This is a complete, bounded public synthesis, with supplied data and full keys. The algebra first attempt needs fractions, straight lines, powers and logarithms. The numerical continuation needs derivatives, a first differential equation and a geometric series; these are developed where used. Reading the whole graduate reference book is not a prerequisite. Allow about two and a half hours.

The task IDs **AM-CV-1**, **AM-CV-2** and **AM-CV-R** distinguish the original, changed and later-return work. All prompts, hints and solutions are public. Saving a response or comparing it with the rubric is self-study, not checked Practice, proof certification or an award of mastery.

<a id="section-5-a-contract-before-fitting"></a>
## A contract before fitting {#section-7-a-contract-before-fitting}

Imagine a well-mixed object cooling in a room. Let $T(t)$ be its temperature in degrees Celsius and $t$ elapsed time in minutes. For this model, assume:

- the room's ambient temperature $A$ is constant and known independently;
- the object has one spatially uniform temperature, with no phase change;
- the rate of change is proportional to its temperature excess $x=T-A$, with a constant $k>0$;
- no heating input, ambient drift or sensor lag is included.

These are hypotheses, not conclusions of fitting. Temperature differences in degrees Celsius have the same numerical size as differences in kelvins. A ratio such as $(T-A)/(T(0)-A)$ is dimensionless; the ratio of two raw Celsius readings does not describe cooling toward a nonzero ambient.

| Quantity | Meaning | Unit or domain |
| --- | --- | --- |
| $A,T,B=T(0)-A$ | ambient, object temperature, initial excess | degrees Celsius; $B>0$ |
| $t,\\Delta,h$ | elapsed time, observation spacing, numerical step | minutes |
| $k$ | decay rate | inverse minutes |
| $q=e^{-k\\Delta}$ | excess retained after one observation interval | dimensionless, $0<q<1$ |
| $a,b$ | intercept and slope of a comparison line | degrees Celsius; degrees Celsius per minute |
| $r=y-\\widehat T$ | observation minus prediction | degrees Celsius |

The intended claim is a prediction for this stipulated system and a numerical approximation to its equations. It is not a safety recommendation, a causal effect of a cooling intervention or evidence that a real object satisfies these assumptions.

<a id="section-27-an-algebra-first-attempt"></a>
## An algebra first attempt {#section-29-an-algebra-first-attempt}

**AM-CV-1, algebra.** Use $A=20$ and the following **authored synthetic reference data**. They are exact rational numbers supplied for this exercise, not measurements obtained from a laboratory.

| $t$ in minutes | $T$ in degrees Celsius | Role fixed before fitting |
| --- | --- | --- |
| $0$ | $80$ | calibration |
| $10$ | $50$ | calibration |
| $20$ | $35$ | calibration |
| $30$ | $55/2$ | test; exclude from fitting |

Fit both families to **all three calibration observations**:

1. a line $L(t)=a+bt$, minimizing the sum of squared residuals in the original temperature units;
2. an excess-exponential curve $E(t)=20+Bq^{t/10}$, with $B>0$ and $0<q<1$, using the same squared-residual criterion.

Give the fitted rules, all calibration residuals, their squared-residual sums, and the frozen predictions at $30$ minutes. Explain the units and why the fourth reading was not used to choose the parameters. Does this finite comparison establish that exponential cooling describes a real object, or that either rule may be extrapolated indefinitely? Keep your response before the worked comparison.

**One-step hint.** Subtract $20$ before comparing successive ratios. For the line use $\\bar t=10$, $\\bar T=55$ and

$$
b=\\frac{\\sum_{i=0}^2(t_i-\\bar t)(T_i-\\bar T)}
        {\\sum_{i=0}^2(t_i-\\bar t)^2},\\qquad a=\\bar T-b\\bar t.
$$

This formula can be checked by expanding squares; calculus is unnecessary.

<a id="section-54-worked-algebra-comparison"></a>
## Worked algebra comparison {#section-56-worked-algebra-comparison}

The excesses are $60,30,15$. Thus $B=60$ and $q=1/2$ give zero residual at every calibration time. A squared-residual sum cannot be negative, so this is a global minimum using **all three** observations. Any other zero-residual fit must match the first reading, which fixes $B$, and the second, which fixes $q$. The third is an exact calibration consistency check, not held-out evidence.

For the line the slope numerator is $-450$ and the denominator is $200$. Therefore

$$
L(t)=\\frac{155}{2}-\\frac94t,\\qquad
E(t)=20+60(1/2)^{t/10}.
$$

The line has residuals $5/2,-5,5/2$, with squared-residual sum $75/2$ in squared degrees Celsius. To verify the minimizer without derivatives, observe that $\\sum r_i=0$ and $\\sum t_i r_i=0$. For any changes $\\alpha,\\beta$ to the intercept and slope,

$$
\\sum_i\\bigl(r_i-\\alpha-\\beta t_i\\bigr)^2
=\\frac{75}{2}+\\sum_i(\\alpha+\\beta t_i)^2.
$$

The added sum is nonnegative, and vanishes only when $\\alpha=\\beta=0$, since the calibration times are distinct. This proves uniqueness of the least-squares line.

| Quantity | Fitted line | Fitted excess-exponential |
| --- | --- | --- |
| calibration predictions | $155/2,55,65/2$ | $80,50,35$ |
| calibration residuals | $5/2,-5,5/2$ | $0,0,0$ |
| calibration squared-residual sum | $75/2$ | $0$ |
| frozen prediction at $30$ minutes | $10$ | $55/2$ |
| test residual | $35/2$ | $0$ |

Both fitted families use two parameters and the same calibration information. Joining only the first two points would give $80-3t$; that is a different two-observation fitting rule, not the requested three-observation least-squares fit.

The reference records were constructed to have this exponential pattern. A zero test residual is a finite consistency result for an authored example, not independent empirical validation. The line reaches the assumed ambient at $t=230/9$ minutes and falls below it afterward. That extrapolation contradicts the declared positive-excess cooling regime. The exponential preserves positive excess for every finite $t\\ge0$, but a real process may still violate its assumptions.

**A reproducible reference graph.** Use a horizontal axis from $0$ to $30$ minutes, marked every $5$ minutes, and a vertical axis from $0$ to $90$ degrees Celsius, marked every $10$ degrees. Draw and label the ambient line $T=20$. Plot the three calibration records as filled circles and the test record as an open square, so the distinction does not depend on color. Draw the fitted line through $(0,155/2)$ and $(30,10)$. Plot the exponential rule across the same window; these additional exact coordinates determine useful intermediate points:

| $t$ | $L(t)$ | $E(t)$ |
| --- | --- | --- |
| $5$ | $265/4$ | $20+30\\sqrt2$ |
| $15$ | $175/4$ | $20+15\\sqrt2$ |
| $25$ | $85/4$ | $20+(15/2)\\sqrt2$ |

The formula specifies the exponential between the points; joining four sampled values by straight segments would instead draw a piecewise-linear approximation. The exponential descends toward ambient, bending upward. The fitted line lies below the first calibration point, above the second and below the third, matching the signed residuals. At the test time the open square lies on the exponential and $35/2$ degrees above the line. The graph makes those comparisons visible; the table and formulas establish their exact values. Nothing in this finite drawing proves reliability outside the stated system or time window.

<a id="section-96-algebra-self-review"></a>
## Algebra self-review {#section-98-algebra-self-review}

For the algebra entry, the work through this section is complete without derivatives or numerical integration. Keep a table **and the graph** described above, then check:

| Evidence | Focused repair |
| --- | --- |
| Domain $0\\le t\\le30$ minutes for the comparison; ambient, excess and units stated | Subtract $20$ before forming the exponential ratio; $q$ is dimensionless and the line's slope has temperature-per-time units |
| Both fits use all three calibration records, with a justified fitting convention | Check the nonnegative squared-loss argument and the residual orthogonality identity |
| A frozen test prediction and signed original-temperature residual for each rule | Recompute $y-\\widehat T$, rather than compare a log residual with a temperature residual |
| Filled calibration marks, a distinct test mark, labeled axes and the ambient line | Rebuild the graph from the supplied coordinate tables; do not use color alone |
| A defended, bounded choice and an extrapolation caveat | The exponential is less misleading for these authored records and this assumed cooling regime; real ambient drift, spatial temperature differences or sensor lag could defeat it |

These checks describe your own argument. The original, changed and return tasks remain distinct; opening the public key does not establish an independent assessment result.

<a id="section-110-the-same-model-as-a-differential-equation"></a>
## The same model as a differential equation {#section-112-the-same-model-as-a-differential-equation}

**AM-CV-1, numerical continuation.** Derive a finite-step method for the fitted cooling equation. At $t=20$ minutes, require the reported computation to differ from the exact fitted-model temperature by **less than $1/5$ degree Celsius**. Separate error from numerical stepping, logarithm evaluation, output rounding, measurement uncertainty and the choice of model. Show a sufficient step size and verify it against an independently computed exact grid value.

<a id="section-114-worked-differential-equation-model"></a>
### Worked differential-equation model {#section-116-worked-differential-equation-model}

The assumed rate law is

$$
\\frac{dT}{dt}=-k(T-A),\\qquad
x(t)=T(t)-A,\\qquad x'(t)=-kx(t).
$$

Integrating $x'/x=-k$ for positive excess gives

$$
\\log\\!\\left(\\frac{x(t)}{B}\\right)=-kt,\\qquad
T(t)=A+Be^{-kt}.
$$

The logarithm has a dimensionless argument. Differentiation and the initial value verify the solution directly. At the observation grid, $T(j\\Delta)=A+Bq^j$. Here $\\Delta=10$ minutes, $k=\\log2/10$ in inverse minutes, and $T(20)=35$ exactly.

In seconds the same rate is $k/60$, and the observation spacing is $600$ seconds: $k\\Delta$ is unchanged. Adding $273.15$ to both $T$ and $A$ changes to kelvins without changing $B,q$ or $k$. A value of $k$ without its time unit is incomplete.

Forward Euler replaces the derivative by a finite difference:

$$
\\frac{x_{n+1}-x_n}{h}=-kx_n,\\qquad
x_{n+1}=(1-kh)x_n,\\qquad x_n=B(1-kh)^n.
$$

The recurrence preserves positive, decreasing excess when $0<kh<1$. A $20$-minute step here has factor $1-2\\log2<0$, so one step crosses below ambient although the exact solution never does. A finite output alone is not a successful numerical validation.

<a id="section-143-a-quantitative-numerical-error-certificate"></a>
## A quantitative numerical error certificate {#section-145-a-quantitative-numerical-error-certificate}

Write $\\ell=-\\log q$, choose $m$ steps per observation interval, and set $h=\\Delta/m$. At $t=j\\Delta$ there are $n=jm$ steps and $z=\\ell/m$. For $0<z<1$,

$$
0\\le-\\log(1-z)-z
=\\sum_{r=2}^{\\infty}\\frac{z^r}{r}
\\le\\frac{z^2}{2(1-z)}.
$$

Consequently Euler underestimates the positive exact excess. Since $1-e^{-u}\\le u$ for $u\\ge0$,

$$
0\\le Bq^j-B(1-\\ell/m)^{jm}
\\le Bq^j\\frac{j\\ell^2}{2(m-\\ell)}.
$$

This is a sufficient error bound, not an assertion that every step attains it or that it is optimal.

For the primary problem $j=2$, $Bq^2=15$ and $\\ell=\\log2<7/10$. The resulting bounds are:

| $m$ | $h$ in minutes | certified upper bound for stepping error at $20$ minutes |
| --- | --- | --- |
| $10$ | $1$ | $49/62$ degrees Celsius |
| $20$ | $1/2$ | $147/386$ degrees Celsius |
| $40$ | $1/4$ | $49/262$ degrees Celsius |

Thus $m=40$ leaves room below $1/5$ for evaluating the logarithm and rounding. This table is a table of proved upper bounds, not measured errors.

For a reproducible logarithm certificate take any rational $r>1$ and put $z=(r-1)/(r+1)$. Integrating a finite geometric expansion of $1/(1-s^2)$ gives

$$
\\ell=\\log r
=2\\sum_{a=0}^{N-1}\\frac{z^{2a+1}}{2a+1}+R_N,\\qquad
0<R_N\\le
\\frac{2z^{2N+1}}{(2N+1)(1-z^2)}.
$$

All endpoints are rational. For $r=2$, $z=1/3$; even the first two terms and their remainder imply $69/100<\\log2<7/10$. The code uses $N=10$ and retains both endpoints.

The derivative of $B(1-\\ell/m)^{jm}$ with respect to $\\ell$ has absolute value at most $Bj$ on this positive-step interval. Therefore the logarithm bracket contributes at most $BjR_N$, here $120R_{10}$. Outward rounding to four decimal places adds at most $10^{-4}$ degree Celsius to either endpoint. The exact rational checks below certify

$$
\\frac{49}{262}+120R_{10}+\\frac1{10000}<\\frac15.
$$

This certificate covers the computation of the **fitted equation**. It does not absorb measurement error or model discrepancy into a numerical tolerance.

<a id="section-191-a-separate-sensor-uncertainty-audit"></a>
## A separate sensor-uncertainty audit {#section-193-a-separate-sensor-uncertainty-audit}

This is a different, explicitly declared two-calibration protocol, not a relabelling of the third calibration record above as test data. Keep $A=20$ exact, use only $t=0,10$ to fit, and suppose each sensor reading has absolute error at most $\\delta=1/5$ degree Celsius. No distribution, independence or confidence level is assumed.

| $t$ in minutes | synthetic sensor reading | role in this separate audit |
| --- | --- | --- |
| $0$ | $801/10$ | calibration |
| $10$ | $499/10$ | calibration |
| $20$ | $351/10$ | test |
| $30$ | $137/5$ | test |

These four readings are the original exact reference temperatures plus, respectively, $1/10,-1/10,1/10,-1/10$. That construction is available because this is synthetic teaching data; it is not a real sensor specification.

Fitting the two displayed calibration readings as exact numbers gives $\\widehat B=601/10$ and $\\widehat q=299/601$. Its predictions at $20,30$ minutes are

$$
20+\\frac{89401}{6010},\\qquad
20+\\frac{26730899}{3612010}.
$$

The corresponding test residuals are $135/601$ and $-405/722402$ degrees Celsius. The first exceeds $\\delta$: comparing the residual only with the future sensor's tolerance ignores uncertainty in the fitted parameters.

For a justified envelope let $s_0,s_1$ be the unknown true calibration excesses. They lie in

$$
s_0\\in[599/10,603/10],\\qquad
s_1\\in[297/10,301/10].
$$

Every pair in this rectangle has $s_0>s_1>0$. The compatible model has $B=s_0$, $q=s_1/s_0$, so its excess at $j\\Delta$ is $s_1^j/s_0^{j-1}$. For $j\\ge2$ this increases with $s_1$ and decreases with $s_0$. Thus a future **sensor reading** must lie in

$$
I_j=\\left[
20+\\frac{(297/10)^j}{(603/10)^{j-1}}-\\frac15,\\quad
20+\\frac{(301/10)^j}{(599/10)^{j-1}}+\\frac15
\\right].
$$

Both supplied test readings lie in their respective $I_2,I_3$. This shows compatibility, not proof of the mechanism. Bounding $B$ and $q$ independently and forgetting their common calibration data would give a different, generally looser envelope.

Now audit a **separate synthetic stress reading** of $123/5$ at $40$ minutes. It is deliberately the reference value $95/4$ plus $17/20$, exceeding the proposed sensor bound. Indeed $\\sup I_4<241/10<123/5$: the first inequality reduces to the exact integer comparison $301^4<39\\cdot599^3$. This reading is incompatible with the joint assumptions. It cannot tell us, by itself, whether a real discrepancy would come from a drifting ambient, a faulty sensor bound, missing physics or another cause. Do not refit on the failed test and continue calling it untouched validation.

<a id="section-233-changed-task-ambient-temperature-is-unknown"></a>
## Changed task: ambient temperature is unknown {#section-235-changed-task-ambient-temperature-is-unknown}

**AM-CV-2.** This time the ambient is unknown. Use three exact synthetic calibration records:

| $t$ in minutes | $T$ in degrees Celsius |
| --- | --- |
| $0$ | $70$ |
| $5$ | $50$ |
| $10$ | $38$ |

1. With $\\Delta=5$, fit $T(j\\Delta)=A+Bq^j$ in the positive cooling branch. Show why the first two records alone do not identify all three parameters.
2. Fit an original-scale least-squares line to the same three records. Freeze both fits and compare them with a test sensor reading $309/10$ at $15$ minutes, whose error bound is $1/10$ and whose calibration records are stipulated exact.
3. Derive a certified Euler computation at $10$ minutes with error less than $1/5$ degree Celsius, including logarithm and four-decimal rounding error. Test the sufficient choice $m=30$ steps per observation interval. Explain why a smaller integration step cannot identify a parameter that the observations do not identify.

**Repair hint.** Divide successive temperature differences, not raw temperatures. For exact data with nonzero first difference,

$$
q=\\frac{T_2-T_1}{T_1-T_0},\\qquad
A=\\frac{T_1-qT_0}{1-q}.
$$

Check $0<q<1$ and $B=T_0-A>0$ before accepting a cooling interpretation.

<a id="section-256-full-changed-task-solution"></a>
## Full changed-task solution {#section-258-full-changed-task-solution}

The differences are $-20,-12$, giving $q=3/5$, $A=20$, $B=50$ and $k=\\log(5/3)/5$ in inverse minutes. Substitution checks all three equations. If only $70,50$ were supplied, every $A<50$ would give $B=70-A$ and $q=(50-A)/(70-A)\\in(0,1)$; there would be infinitely many compatible cooling curves. The third exact record resolves this ambiguity in the stated family. Constant records or a ratio outside $(0,1)$ require a different analysis, not division by a zero difference.

At $15$ minutes the exponential predicts $20+50(3/5)^3=154/5$. The test residual is $1/10$, equal to the inclusive sensor bound. The least-squares line is

$$
L(t)=\\frac{206}{3}-\\frac{16}{5}t.
$$

Its calibration residuals are $4/3,-8/3,4/3$, whose sum and time-weighted sum vanish. At $15$ minutes it predicts $62/3$, giving test residual $307/30$. Unlike the primary comparison, the unknown-ambient exponential has three fitted parameters while the line has two. Exact fit to three records is not evidence that this extra flexibility will generalize.

For the numerical part $\\ell=\\log(5/3)$ has series parameter $z=1/4$. The first term and its remainder give $1/2<\\ell<13/25$. At $10$ minutes $j=2$ and $Bq^2=18$. With $m=30$ and $h=1/6$ minute,

$$
0\\le 38-T^{\\rm Euler}(10)
<\\frac{18(13/25)^2}{30-13/25}
=\\frac{3042}{18425}<\\frac15.
$$

Adding the $N=10$ logarithm-bracket contribution $100R_{10}$ and $10^{-4}$ rounding still leaves the total below $1/5$, as checked exactly below. Numerical refinement solves the chosen equation more accurately; it supplies no extra observations and cannot remove the two-record identifiability defect.

<a id="section-278-later-return-with-different-parameters"></a>
## Later return with different parameters {#section-280-later-return-with-different-parameters}

**AM-CV-R.** At another sitting, if useful, close the earlier keys and record the date and any help used. This is public reconstruction practice, not an enforced delay or unseen assessment.

Let the known ambient be $5$ degrees Celsius. The three exact calibration records at $0,4,8$ minutes are $65,45,95/3$. Fit both an excess-exponential and an original-scale least-squares line. Predict the test reading at $12$ minutes before comparing with $114/5$, whose declared error bound is $1/10$. For a numerical check at $8$ minutes use Euler with $m=50$ steps per observation interval and justify a total error below $1/10$, including the same logarithm and rounding provisions.

<a id="section-284-full-return-solution"></a>
## Full return solution {#section-286-full-return-solution}

Here $B=60$, $q=2/3$, $k=\\log(3/2)/4$ in inverse minutes. All three calibration excesses are exactly geometric. The exponential predicts $205/9$ at $12$ minutes, with test residual $1/45$.

The fitted line is $575/9-(25/6)t$. Its calibration residuals are $10/9,-20/9,10/9$, and its test prediction is $125/9$. Its test residual is $401/45$. These checks use the same calibration records; the finite comparison still supplies no external validation.

For $\\ell=\\log(3/2)$, $z=1/5$ in the logarithm certificate and $2/5<\\ell<41/100$. At $8$ minutes the exact excess is $80/3$. For $m=50$, $h=2/25$ minute, the stepping bound is

$$
\\frac{(80/3)(41/100)^2}{50-41/100}
=\\frac{6724}{74385}<\\frac1{10}.
$$

The additional terms $120R_{10}+10^{-4}$ still fit the $1/10$ budget. The code checks this rational inequality and the two earlier budgets without relying on a floating-point logarithm.

<a id="section-299-reproduce-the-finite-checks"></a>
## Reproduce the finite checks {#section-301-reproduce-the-finite-checks}

Run the following as a standalone Python 3 program. It uses only the standard-library rational type, no files, external data, network, random seed or scientific package. It does not run automatically in the reader. Its assertions check these finite examples and their derived certificates; they are not a numerical proof of a general physical law.

Every decimal interval printed below is rounded outward using integer arithmetic. The two Euler endpoints bracket the result for the exact fitted logarithm. The algebraic formula $A+Bq^j$ is an independent exact reference at the specified grid times.

\`\`\`python
from fractions import Fraction as F


def fit_known(ambient, first, second):
    if not first > second > ambient:
        raise ValueError("Expected positive decreasing cooling excesses")
    excess = first - ambient
    return excess, (second - ambient) / excess


def fit_unknown(first, second, third):
    if second == first:
        raise ValueError("A zero first difference does not identify this fit")
    q = (third - second) / (second - first)
    if not 0 < q < 1:
        raise ValueError("Data do not fit the declared cooling branch")
    ambient = (second - q * first) / (1 - q)
    excess = first - ambient
    if excess <= 0:
        raise ValueError("Initial excess must be positive")
    return ambient, excess, q


def line_fit(times, temperatures):
    if len(times) != len(temperatures) or len(times) < 2:
        raise ValueError("Supply matching calibration records")
    mean_t = sum(times, F(0)) / len(times)
    mean_y = sum(temperatures, F(0)) / len(times)
    denominator = sum((t - mean_t) ** 2 for t in times)
    if denominator == 0:
        raise ValueError("Distinct calibration times are required")
    slope = sum((t - mean_t) * (y - mean_y)
                for t, y in zip(times, temperatures)) / denominator
    return mean_y - slope * mean_t, slope


def log_enclosure(ratio, terms=10):
    if ratio <= 1 or type(terms) is not int or not 1 <= terms <= 30:
        raise ValueError("Use ratio > 1 and 1..30 terms")
    z = (ratio - 1) / (ratio + 1)
    lower = 2 * sum((z ** (2 * a + 1) / (2 * a + 1)
                     for a in range(terms)), F(0))
    remainder = 2 * z ** (2 * terms + 1) / (
        (2 * terms + 1) * (1 - z * z))
    return lower, lower + remainder


def euler_certificate(ambient, excess, q, steps_per_interval, intervals=2):
    m, j = steps_per_interval, intervals
    if not 0 < q < 1 or excess <= 0:
        raise ValueError("Expected positive cooling data")
    if type(m) is not int or not 1 <= m <= 1000:
        raise ValueError("Use 1..1000 steps per observation interval")
    if type(j) is not int or not 1 <= j <= 20:
        raise ValueError("Use 1..20 observation intervals")
    lower, upper = log_enclosure(1 / q)
    if upper >= m:
        raise ValueError("This step cannot certify positive Euler excess")
    euler_lower = excess * (1 - upper / m) ** (j * m)
    euler_upper = excess * (1 - lower / m) ** (j * m)
    # Cross-check the power formula by the actual Euler recurrence.
    recurrent = excess
    for _ in range(j * m):
        recurrent *= 1 - lower / m
    assert recurrent == euler_upper
    exact = excess * q ** j
    stepping_bound = exact * F(j, 2) * upper ** 2 / (m - upper)
    log_bound = excess * j * (upper - lower)
    assert euler_lower <= euler_upper
    assert euler_lower <= exact
    assert exact - euler_lower <= stepping_bound + log_bound
    return (ambient + euler_lower, ambient + euler_upper,
            stepping_bound, log_bound)


def observed_band(ambient, first, second, delta, interval):
    if type(interval) is not int or interval < 2 or delta < 0:
        raise ValueError("Use a future interval >= 2 and nonnegative bound")
    low0, high0 = first - ambient - delta, first - ambient + delta
    low1, high1 = second - ambient - delta, second - ambient + delta
    if not low0 > high1 > 0 or low1 <= 0:
        raise ValueError("This rectangle cannot certify the cooling branch")
    j = interval
    return (ambient + low1 ** j / high0 ** (j - 1) - delta,
            ambient + high1 ** j / low0 ** (j - 1) + delta)


def outward(lower, upper, places=4):
    scale = 10 ** places
    left = lower.numerator * scale // lower.denominator
    right = -((-upper.numerator * scale) // upper.denominator)

    def decimal(integer):
        sign = "-" if integer < 0 else ""
        whole, fraction = divmod(abs(integer), scale)
        return f"{sign}{whole}.{fraction:0{places}d}"

    return "[" + decimal(left) + ", " + decimal(right) + "]"


times = list(map(F, [0, 10, 20]))
temperatures = list(map(F, [80, 50, 35]))
a, b = line_fit(times, temperatures)
assert (a, b) == (F(155, 2), F(-9, 4))
residuals = [y - (a + b * t) for t, y in zip(times, temperatures)]
assert residuals == [F(5, 2), F(-5), F(5, 2)]
assert sum(r * r for r in residuals) == F(75, 2)
assert F(55, 2) - (a + b * 30) == F(35, 2)
B, q = fit_known(F(20), temperatures[0], temperatures[1])
assert (B, q) == (F(60), F(1, 2))
assert [F(20) + B * q ** j for j in range(4)] == [
    F(80), F(50), F(35), F(55, 2)]
for m in [10, 20, 40]:
    lo, hi, stepping, logarithm = euler_certificate(F(20), B, q, m)
    print("Primary Euler at 20 min, m =", m, outward(lo, hi))
    if m == 40:
        assert stepping < F(49, 262)
        assert F(49, 262) + logarithm + F(1, 10000) < F(1, 5)

noisy_B, noisy_q = fit_known(F(20), F(801, 10), F(499, 10))
assert (noisy_B, noisy_q) == (F(601, 10), F(299, 601))
assert F(351, 10) - (20 + noisy_B * noisy_q ** 2) == F(135, 601)
assert F(137, 5) - (20 + noisy_B * noisy_q ** 3) == F(-405, 722402)
assert F(135, 601) > F(1, 5)
for j, reading in [(2, F(351, 10)), (3, F(137, 5))]:
    lo, hi = observed_band(F(20), F(801, 10), F(499, 10), F(1, 5), j)
    assert lo <= reading <= hi
    print("Sensor envelope, interval", j, outward(lo, hi))
lo, hi = observed_band(F(20), F(801, 10), F(499, 10), F(1, 5), 4)
assert 301 ** 4 < 39 * 599 ** 3
assert hi < F(241, 10) < F(123, 5)
print("Stress envelope at 40 min", outward(lo, hi))

assert fit_unknown(F(70), F(50), F(38)) == (F(20), F(50), F(3, 5))
changed_line = line_fit(list(map(F, [0, 5, 10])), list(map(F, [70, 50, 38])))
assert changed_line == (F(206, 3), F(-16, 5))
assert F(20) + 50 * F(3, 5) ** 3 == F(154, 5)
assert F(309, 10) - F(154, 5) == F(1, 10)
assert F(309, 10) - (changed_line[0] + changed_line[1] * 15) == F(307, 30)
return_line = line_fit(list(map(F, [0, 4, 8])), [F(65), F(45), F(95, 3)])
assert return_line == (F(575, 9), F(-25, 6))
assert F(5) + 60 * F(2, 3) ** 3 == F(205, 9)
assert F(114, 5) - F(205, 9) == F(1, 45)
assert F(114, 5) - (return_line[0] + return_line[1] * 12) == F(401, 45)
for label, ambient, excess, ratio, m, coarse, budget in [
    ("Changed", F(20), F(50), F(3, 5), 30, F(3042, 18425), F(1, 5)),
    ("Return", F(5), F(60), F(2, 3), 50, F(6724, 74385), F(1, 10)),
]:
    lo, hi, stepping, logarithm = euler_certificate(ambient, excess, ratio, m)
    assert stepping < coarse
    assert coarse + logarithm + F(1, 10000) < budget
    print(label, "Euler at two observation intervals", outward(lo, hi))
print("All declared finite checks and error budgets passed.")
\`\`\`

<a id="section-461-rubric-and-repair-routes"></a>
## Rubric and repair routes {#section-463-rubric-and-repair-routes}

Preserve your first argument beside any revision. For each applicable row record **shown**, **needs repair** or **used help**, and identify the actual supporting line. These are descriptive self-review labels, not an automated mathematical grade.

| Evidence in the work | If it is missing |
| --- | --- |
| Temperatures, excesses, time units and known versus fitted parameters are explicit | Rewrite the quantity table; check that logarithm arguments and $kh$ are dimensionless |
| Both primary fits use all three calibration records and exclude the test record | Rebuild the residual table; do not substitute a two-point joining line for a three-point least-squares fit |
| Parameter identification is justified, including the unknown-ambient two-record ambiguity | Write the continuum indexed by $A$; a finer solver does not add an equation |
| Euler is derived from the derivative and its positive-step condition is checked | Compute $1-kh$ before plotting; a step below ambient contradicts the stipulated branch |
| A numerical tolerance follows from a bound, including logarithm and rounding contributions | State $m,j,z$, then account for all three numerical terms; a stable-looking decimal is not a certificate |
| Sensor-error propagation is distinguished from stepping error and statistical uncertainty | Reconstruct $s_1^j/s_0^{j-1}$ and its rectangle bounds; no probability law was supplied |
| Test residuals, the stress incompatibility and the model-use boundary are stated separately | Freeze the fitting rule before testing, then state what a failed joint assumption cannot diagnose |
| Changed and return work are reconstructed with their new data | Recompute differences and ratios from that task's records; do not reuse the original half-life |

For focused repair, use [Dimensions, Scales and Similarity](/atlas/#/item/book-applied-modeling-proof-reference?chapter=dimensions-scales-similarity), [Identifiability and Inverse Problems](/atlas/#/item/book-applied-modeling-proof-reference?chapter=identifiability-inverse-problems), [Validation and Causal Boundaries](/atlas/#/item/book-applied-modeling-proof-reference?chapter=validation-causal-boundaries), or [Reproducible Model Computation](/atlas/#/item/book-applied-modeling-proof-reference?chapter=reproducible-model-computation). Those broader chapters are continuations, not extra hidden prerequisites for this example.

<a id="section-478-a-bounded-conclusion"></a>
## A bounded conclusion {#section-480-a-bounded-conclusion}

A complete report can conclude: “For these synthetic reference records, the fitted exponential has zero calibration loss and zero error on the declared test record, while the fitted line does not. Under the stated constant-ambient cooling equation, the specified Euler computation meets its derived error budget. The separate bounded-sensor audit accepts two records and rejects the deliberate stress record under its joint assumptions. These results verify finite calculations and conditional model predictions; they do not validate a real cooling process, identify a causal intervention or establish general forecasting reliability.”

That boundary is part of the mathematics. More realistic data, ambient uncertainty, repeated measurements or a different mechanism require a new observation and validation contract, not a new label on the same finite table.

<a id="section-484-exercises-with-staged-help"></a>
## Exercises with staged help {#section-486-exercises-with-staged-help}

<a id="section-486-exercise-1"></a>
### Exercise 1 {#section-488-exercise-1}
<a id="cooling-model-validation-ex-1"></a>

For the reference data, compute the calibration excesses and their successive ratios.

<details>
<summary>Hint 1</summary>

Subtract the fixed ambient temperature from each observation.

</details>
<details>
<summary>Hint 2</summary>

Compare the second excess to the first and the third to the second.

</details>
<details>
<summary>Full solution</summary>

The excesses are 60,30,15 degrees. Both ratios are one half, so the discrete exponential family has B=60 and q=1/2. The calculation uses all three calibration readings as exact synthetic values; it does not estimate a sensor distribution.

</details>

<a id="section-510-exercise-2"></a>
### Exercise 2 {#section-512-exercise-2}
<a id="cooling-model-validation-ex-2"></a>

Prove the fitted exponential is a global least-squares minimiser on the reference calibration data.

<details>
<summary>Hint 1</summary>

Squared residuals are nonnegative.

</details>
<details>
<summary>Hint 2</summary>

The candidate reproduces all three calibration values exactly.

</details>
<details>
<summary>Full solution</summary>

The candidate has residual sum zero, the smallest possible value of a sum of squares. Any other zero-residual candidate must match t=0, fixing B=60, then t=10, fixing q=1/2. Thus it is also unique within the declared positive-excess family.

</details>

<a id="section-534-exercise-3"></a>
### Exercise 3 {#section-536-exercise-3}
<a id="cooling-model-validation-ex-3"></a>

Find the first time the fitted line reaches the assumed ambient temperature.

<details>
<summary>Hint 1</summary>

Use the displayed fitted slope and intercept.

</details>
<details>
<summary>Hint 2</summary>

Set its value equal to 20 and solve the resulting linear equation.

</details>
<details>
<summary>Full solution</summary>

The equation 155/2-(9/4)t=20 gives 9t/4=115/2 and t=230/9 minutes. Beyond that time the line is below ambient, contradicting the intended positive-excess cooling regime. This is a model-domain failure, not an arithmetic error in evaluating the line.

</details>

<a id="section-558-exercise-4"></a>
### Exercise 4 {#section-560-exercise-4}
<a id="cooling-model-validation-ex-4"></a>

Relate the discrete factor q to the continuous cooling rate k over spacing Delta.

<details>
<summary>Hint 1</summary>

Evaluate the ODE exponential at one observation spacing.

</details>
<details>
<summary>Hint 2</summary>

Both forms must have the same ratio of successive excesses.

</details>
<details>
<summary>Full solution</summary>

The relation is q=exp(-k Delta), hence k=-log(q)/Delta. A rate has inverse-time units, while q is dimensionless. Here q=1/2 and Delta=10 minutes give k=log(2)/10 per minute.

</details>

<a id="section-582-exercise-5"></a>
### Exercise 5 {#section-584-exercise-5}
<a id="cooling-model-validation-ex-5"></a>

Differentiate the continuous cooling model and verify its governing ODE.

<details>
<summary>Hint 1</summary>

Hold ambient A and rate k fixed.

</details>
<details>
<summary>Hint 2</summary>

Differentiate only the exponential factor in T=A+B exp(-kt).

</details>
<details>
<summary>Full solution</summary>

The derivative is -k B exp(-kt)=-k(T-A). The initial condition is T(0)=A+B. Thus the formula solves the written constant-ambient, constant-rate ODE for every time in its declared domain. It does not verify that an actual object has constant parameters.

</details>

<a id="section-606-exercise-6"></a>
### Exercise 6 {#section-608-exercise-6}
<a id="cooling-model-validation-ex-6"></a>

At fixed q between zero and one, compare T at t and at t+Delta.

<details>
<summary>Hint 1</summary>

Subtract A before comparing the two temperatures.

</details>
<details>
<summary>Hint 2</summary>

The second excess is q times the first excess.

</details>
<details>
<summary>Full solution</summary>

The relation is T(t+Delta)-A=q[T(t)-A]. For positive B the excess stays positive and decreases at every step. The limit as the number of steps tends to infinity is zero, so model temperatures approach A from above without reaching it at finite time.

</details>

<a id="section-630-exercise-7"></a>
### Exercise 7 {#section-632-exercise-7}
<a id="cooling-model-validation-ex-7"></a>

Why cannot the third reference calibration point also be described as independent held-out validation?

<details>
<summary>Hint 1</summary>

Trace every observation used to fit or select the family.

</details>
<details>
<summary>Hint 2</summary>

An exact consistency check still belongs to the calibration information if it was used there.

</details>
<details>
<summary>Full solution</summary>

The fitting protocol explicitly uses all three calibration observations. Their agreement supports internal compatibility of the authored reference data with the chosen family. Calling one of them held out after it influenced fitting changes the evidence description; separate unused observations are required for that claim.

</details>

<a id="section-654-exercise-8"></a>
### Exercise 8 {#section-656-exercise-8}
<a id="cooling-model-validation-ex-8"></a>

For j at least two, determine the monotonicity of s1^j/s0^(j-1) for positive s0,s1.

<details>
<summary>Hint 1</summary>

Differentiate with respect to each variable separately.

</details>
<details>
<summary>Hint 2</summary>

Keep track of the negative exponent on s0.

</details>
<details>
<summary>Full solution</summary>

Its derivative with respect to s1 is j s1^(j-1)/s0^(j-1), which is positive. Its derivative with respect to s0 is -(j-1)s1^j/s0^j, which is negative. Therefore the maximum over a positive rectangle uses the largest s1 and smallest s0, and the minimum uses the opposite endpoints.

</details>

<a id="section-678-exercise-9"></a>
### Exercise 9 {#section-680-exercise-9}
<a id="cooling-model-validation-ex-9"></a>

What distinguishes the numerical error certificate from the sensor-error envelope?

<details>
<summary>Hint 1</summary>

Name the exact target of each error statement.

</details>
<details>
<summary>Hint 2</summary>

A more accurate ODE solve cannot reduce uncertainty in fitted sensor inputs.

</details>
<details>
<summary>Full solution</summary>

The numerical certificate bounds the computation relative to the specified fitted equation. The sensor envelope propagates admissible observation errors through the fit and to a future reading. Neither includes arbitrary model discrepancy unless a separate assumption supplies it. They must be combined with their domains and meanings intact.

</details>

<a id="section-702-exercise-10"></a>
### Exercise 10 {#section-704-exercise-10}
<a id="cooling-model-validation-ex-10"></a>

If ambient temperature is unknown, why are two exact equally spaced readings insufficient to determine every parameter?

<details>
<summary>Hint 1</summary>

Count the unknowns A, B and q, then inspect the equations.

</details>
<details>
<summary>Hint 2</summary>

Choose an admissible A and solve for B and q from the two readings.

</details>
<details>
<summary>Full solution</summary>

For readings y0 and y1, any admissible A below both gives B=y0-A and q=(y1-A)/(y0-A). When y0>y1>A, this q lies between zero and one. A continuum of triples therefore matches the same two readings. A third informative reading or external ambient observation can distinguish them under the model assumptions.

</details>

<a id="section-726-summary"></a>
## Summary {#section-728-summary}

The same cooling equation supports different mathematical and evidential claims: a fit to authored calibration data, an ODE derivation, a numerical approximation bound, a sensor-uncertainty envelope and a check on unused readings. Keeping those claims separate prevents exact algebra from being mistaken for empirical adequacy. Dimensions and scaling next make the units and characteristic times in this model explicit.
`;export{e as default};