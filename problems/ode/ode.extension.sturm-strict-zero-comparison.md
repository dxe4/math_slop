# Compare zero locations through a signed Wronskian

*Hard · [Differential equations problems](index.md)*

Let q\_1,q\_2 be continuous on \[a,b\] with q\_2&gt;q\_1. Let u be a nonzero solution of $u''+q_1u=0$ whose consecutive zeros are a and b. Prove every nonzero solution v of v''+q\_2v=0 has a zero in (a,b).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Change signs so u is positive between its zeros, and suppose v is also positive there.

</details>

<details>
<summary>Hint 2</summary>

Use W=u'\*v-u\*v'; compare W' with the endpoint signs.

</details>

<details>
<summary>Model proof</summary>

A strictly increasing Wronskian cannot have the required opposite endpoint signs.

1. By uniqueness, u has simple endpoint zeros; choose its sign so u&gt;0 on (a,b), giving uprime(a)&gt;0 and uprime(b)&lt;0. Suppose v has no zero in (a,b), and change its sign so v&gt;0 there, hence v(a),v(b)&gt;=0.
2. For W=uprime\*v-u\*vprime, differentiation gives Wprime=(q\_2-q\_1)\*u\*v&gt;0 throughout the interval. Therefore W(b)&gt;W(a).
3. But u(a)=u(b)=0 gives W(a)=uprime(a)\*v(a)&gt;=0 and W(b)=uprime(b)\*v(b)&lt;=0, a contradiction. Thus v must have an interior zero.

**Self-assessment rubric**

- Justify simplicity and endpoint derivative signs for consecutive zeros.
- Compute the correct strictly positive Wronskian derivative.
- Retain possible endpoint zeros of v and derive the incompatible inequalities.

</details>
