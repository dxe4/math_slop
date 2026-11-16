# Union and exactly-one memberships

*Medium · [Combinatorics](index.md)*

Three finite sets satisfy \|A\|=15, \|B\|=12, \|C\|=10, \|A∩B\|=6, \|A∩C\|=4, \|B∩C\|=3, \|A∩B∩C\|=2. Pairwise intersections include the triple members. Enter union for \|A∪B∪C\| and exactly\_one for the number belonging to exactly one set.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"union":26,"exactly_one":17},"checker_scope":"Exact finite structured answer for correct-triple-overcounts-and-isolate-regions; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Add the triple intersection back after subtracting all pairwise intersections.

</details>

<details>
<summary>Hint 2</summary>

Find the A-only, B-only, C-only regions separately.

</details>

<details>
<summary>Worked solution</summary>

Triple members need their full inclusion–exclusion correction.

1. The union is $15+12+10-6-4-3+2=26$.
2. The only-A, only-B, only-C counts are 7,5,5, so exactly\_one=$17$.

</details>
