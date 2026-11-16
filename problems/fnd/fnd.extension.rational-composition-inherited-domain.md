# Simplify a rational composition with an inherited hole

*Medium · [Foundations bridge](index.md)*

Let f(t)=(2t+1)/(t−3) and g(x)=(x+1)/(x−1), each on its original real domain. Simplify $(f\circ g)(x)$ and state all excluded original inputs. Enter rule in value and exclusions in excluded.

```answer
{"answer":{"kind":"rational_function","expected":"(3*x+1)/(4-2*x)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft.","domain":{"variable":"x","excluded":["1","2"]}}}
```

<details>
<summary>Hint 1</summary>

First exclude inputs where g is undefined.

</details>

<details>
<summary>Hint 2</summary>

Then exclude inputs mapped by g to 3 before simplifying the compound quotient.

</details>

<details>
<summary>Worked solution</summary>

Composition carries both the inner domain and the outer forbidden output into its final domain.

1. The inner map excludes x=1. The outer map additionally requires (x+1)/(x−1)≠3, which excludes x=2.
2. Substitution gives numerator (3x+1)/(x−1) and denominator (4−2x)/(x−1). Their quotient is (3x+1)/(4−2x).
3. The denominator still has the pole at 2; the cancelled x−1 leaves an original hole at 1. The excluded set is {1,2}.

</details>
