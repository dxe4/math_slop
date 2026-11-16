# Identify failure of a specified linear mean assumption

*Medium · [Statistics and probability](index.md)*

A data-generating model is $Y=a+bx+\epsilon$ at x=0,1,2, with E(epsilon\|x)=(x-1)^2. An analyst assumes E(epsilon\|x)=0 at every x. Which assessment follows? Choices: The assumed conditional-mean-zero condition fails at x=0 and x=2.; Conditional mean zero follows because a and b are constants.; A fitted line cannot be computed whenever an inference assumption fails.; A nonzero conditional error mean proves the conditional error variances must be unequal.

**Options**

1. The assumed conditional-mean-zero condition fails at x=0 and x=2.
2. Conditional mean zero follows because a and b are constants.
3. A fitted line cannot be computed whenever an inference assumption fails.
4. A nonzero conditional error mean proves the conditional error variances must be unequal.

```answer
{"answer":{"kind":"multiple_choice","expected":"mean_zero_failure","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."},"options":["mean_zero_failure","constant_coefficients_force_zero","fit_impossible","variance_forced"]}
```

<details>
<summary>Hint 1</summary>

Evaluate the given conditional error means at the three predictor values.

</details>

<details>
<summary>Hint 2</summary>

Distinguish computing a descriptive fit from justifying an inference assumption.

</details>

<details>
<summary>Worked solution</summary>

The supplied model directly contradicts the analyst conditional-mean assumption.

1. The specified conditional means are one, zero and one at x equal to zero, one and two.
2. Thus the proposed zero condition fails at both endpoints.
3. This invalidates that assumption for inference, while a descriptive line may still be computed.

</details>
