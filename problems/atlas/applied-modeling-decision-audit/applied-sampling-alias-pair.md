# Two frequencies, one sampled sequence

*Difficulty 3 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 10 of 12*

A cosine is sampled at 10 samples per second. Show that frequencies 2 Hz and 8 Hz produce the same sample sequence. Explain which assumption lets a reconstruction choose 2 Hz and why zero padding does not resolve the ambiguity.

<details>
<summary>Hint 1</summary>

Evaluate $\cos(2\pi fn/10)$

</details>

<details>
<summary>Hint 2</summary>

Use $\cos(2\pi n-\theta)=\cos(\theta)$

</details>

<details>
<summary>Hint 3</summary>

Invoke a band below 5 Hz

</details>

<details>
<summary>Worked solution</summary>

At sample n, the 2 Hz signal is $\cos(2\pi\cdot 2n/10)=\cos(0.4\pi n)$. The 8 Hz signal is $\cos(2\pi\cdot 8n/10)=\cos(1.6\pi n)=\cos(2\pi n-0.4\pi n)=\cos(0.4\pi n)$, so every sample agrees. A prior band-limit below the 5 Hz Nyquist frequency excludes 8 Hz and selects 2 Hz. The discrete samples alone do not. Zero padding inserts no new measurements; it only interpolates the displayed discrete Fourier grid and cannot remove structural aliasing.

**Answer.** The sample cosines coincide exactly; a below-5-Hz band limit selects 2 Hz, while zero padding adds no identifying information.

</details>

*Tags: signal processing, sampling, aliasing, identifiability*
