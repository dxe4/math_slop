
# Exercise and Project Solutions

This retained appendix preserves selected exercises and solutions from the earlier twelve-reading arrangement. Its chapter labels refer to that arrangement, rather than the present seventeen-chapter native order. The current chapter sources provide all 170 exercises, two staged hints and full solution reveals, including corrected hypotheses and additional developments; use those chapter solutions for present assignments. The material below remains available as earlier worked practice. Exercises marked **R** (retrieval), **F** (fluency), **P** (proof), **C** (counterexample/repair), **T** (transfer), and **I** (inquiry) are represented.

---

## Chapter 1: From a path to a number

**Exercise 1 (F).** For $L = \frac{m}{2}\dot{q}^{2} - \frac{k}{2}q^{2}$, derive the equation of motion.

> **Solution.** $\partial L/\partial q = -kq$ and $\partial L/\partial \dot{q} = m\dot{q}$. The Euler--Lagrange equation gives $m\ddot{q} + kq = 0$, simple harmonic motion with $\omega = \sqrt{k/m}$.

**Exercise 2 (P).** Show that adding a constant to $V$ does not change the Euler--Lagrange equations.

> **Solution.** $L' = T - (V + C) = L - C$. Since $C$ is constant, all partial derivatives of $L'$ equal those of $L$. The energy $E$ shifts by $C$, but only energy differences are observable.

**Exercise 3 (F).** For a free particle in two dimensions, identify cyclic coordinates and conserved quantities.

> **Solution.** $L = \frac{m}{2}(\dot{x}^{2} + \dot{y}^{2})$ has no explicit $x$ or $y$ dependence, so both are cyclic. The conserved momenta are $p_{x} = m\dot{x}$ and $p_{y} = m\dot{y}$.

**Exercise 4 (F).** Derive the small-angle period of a simple pendulum.

> **Solution.** For small angles, $\ddot{\theta} + (g/\ell)\theta = 0$. This is simple harmonic motion with $\omega = \sqrt{g/\ell}$ and period $T = 2\pi\sqrt{\ell/g}$.

**Exercise 5 (T).** Particle constrained to a sphere of radius $R$; write the Lagrangian and equations of motion.

> **Solution.** With $r = R$ fixed, $T = \frac{mR^{2}}{2}(\dot{\theta}^{2} + \sin^{2}\theta\,\dot{\phi}^{2})$. The Euler--Lagrange equations give $\ddot{\theta} - \sin\theta\cos\theta\,\dot{\phi}^{2} = 0$ and conservation of $p_{\phi} = mR^{2}\sin^{2}\theta\,\dot{\phi}$.

---

## Chapter 2: Constraints and Lagrange Multipliers

**Exercise 1 (F).** Particle on a circle $x^{2} + y^{2} = R^{2}$; find the constraint force.

> **Solution.** In polar coordinates, the radial equation gives $\lambda = \frac{m}{2}\dot{\theta}^{2}$. The radial constraint force is $F_{r} = -mR\dot{\theta}^{2}$, directed inward (centripetal).

**Exercise 2 (P).** Show that the generalized constraint force does no virtual work.

> **Solution.** With $\mathcal L=L-\sum_a\lambda_af_a$, the reaction is $Q_i=-\sum_a\lambda_a\partial f_a/\partial q_i$. Virtual displacements satisfy $\sum_i(\partial f_a/\partial q_i)\delta q_i=0$, so $\delta W=\sum_iQ_i\delta q_i=0$.

**Exercise 3 (T).** Double pendulum: write the Lagrangian using $\theta_{1}, \theta_{2}$.

> **Solution.** $\mathbf{r}_{1} = (\ell_{1}\sin\theta_{1}, -\ell_{1}\cos\theta_{1})$, $\mathbf{r}_{2} = \mathbf{r}_{1} + (\ell_{2}\sin\theta_{2}, -\ell_{2}\cos\theta_{2})$. The kinetic energy contains a cross term $2\ell_{1}\ell_{2}\dot{\theta}_{1}\dot{\theta}_{2}\cos(\theta_{1} - \theta_{2})$. The potential energy is $V = -m_{1}g\ell_{1}\cos\theta_{1} - m_{2}g(\ell_{1}\cos\theta_{1} + \ell_{2}\cos\theta_{2})$.
> With $\Delta=\theta_1-\theta_2$, the Euler--Lagrange equations are
> $$(m_1+m_2)\ell_1^2\ddot\theta_1+m_2\ell_1\ell_2\ddot\theta_2\cos\Delta+m_2\ell_1\ell_2\dot\theta_2^2\sin\Delta+(m_1+m_2)g\ell_1\sin\theta_1=0,$$
> $$m_2\ell_2^2\ddot\theta_2+m_2\ell_1\ell_2\ddot\theta_1\cos\Delta-m_2\ell_1\ell_2\dot\theta_1^2\sin\Delta+m_2g\ell_2\sin\theta_2=0.$$

**Exercise 4 (F).** Bead on parabola $y = ax^{2}$; find small-oscillation frequency.

> **Solution.** With $[a]=L^{-1}$, $L=(m/2)\dot x^2(1+4a^2x^2)-mgax^2$. Quadratic order gives $\ddot x+2agx=0$, hence $\omega=\sqrt{2ag}$.

**Exercise 5 (T).** Particle on a cone $z = r\cot\alpha$; condition for horizontal circular orbit at height $h$.

> **Solution.** The radial equation at constant $r = h\tan\alpha$ gives $\dot{\phi}^{2} = g\cot\alpha / r = g/(h\tan^{2}\alpha)$. The angular velocity is $\dot{\phi} = \sqrt{g/(h\tan^{2}\alpha)}$.

---

## Chapter 3: Hamilton--Jacobi Theory

**Exercise 1 (P).** Show Hamilton's equations are equivalent to Newton's second law for $H = p^{2}/(2m) + V(q)$.

> **Solution.** $\dot{q} = p/m$ and $\dot{p} = -V'(q)$. Differentiating: $m\ddot{q} = \dot{p} = -V'(q) = F$.

**Exercise 2 (F).** Compute $\{q, p\}$, $\{q, q\}$, $\{p, p\}$.

> **Solution.** $\{q, p\} = 1$, $\{q, q\} = 0$, $\{p, p\} = 0$.

**Exercise 3 (P).** Show $df/dt = \{f, H\} + \partial f/\partial t$ and deduce conservation.

> **Solution.** By the chain rule and Hamilton's equations, $df/dt = \sum_{i}(\partial f/\partial q_{i}\,\partial H/\partial p_{i} - \partial f/\partial p_{i}\,\partial H/\partial q_{i}) + \partial f/\partial t = \{f, H\} + \partial f/\partial t$. If $\partial f/\partial t = 0$ and $\{f, H\} = 0$, then $df/dt = 0$.

**Exercise 4 (F).** Central potential $V(r) = -k/r$ in two dimensions; identify a conserved quantity other than energy.

> **Solution.** In polar coordinates, $H = \frac{1}{2m}(p_{r}^{2} + p_{\phi}^{2}/r^{2}) - k/r$. Since $\phi$ is cyclic, $p_{\phi} = mr^{2}\dot{\phi}$ is conserved (angular momentum $L_{z}$).

**Exercise 5 (T).** Solve the Hamilton--Jacobi equation for a particle falling vertically in gravity.

> **Solution.** With $S = W(q, P) - Pt$, we obtain $\frac{1}{2m}(dW/dq)^{2} + mgq = P$. Integrating and inverting gives $q = P/(mg) - \frac{g}{2}(t + \beta)^{2}$, the familiar free-fall parabola.

---

## Chapter 4: Symplectic Geometry

**Exercise 1 (F).** Verify the matrix of $\omega = \sum_{i}dq_{i} \wedge dp_{i}$ is $\begin{pmatrix}0 & I_{n}\\ -I_{n} & 0\end{pmatrix}$.

> **Solution.** $\omega(\partial_{q_{i}}, \partial_{q_{j}}) = 0$, $\omega(\partial_{p_{i}}, \partial_{p_{j}}) = 0$, $\omega(\partial_{q_{i}}, \partial_{p_{j}}) = \delta_{ij}$. These are exactly the entries of the block matrix.

**Exercise 2 (P).** For $(\mathbb{R}^{2}, \omega = dx \wedge dy)$, show any linear symplectomorphism has determinant $1$.

> **Solution.** Write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Direct multiplication gives $A^TJA=\begin{pmatrix}0&ad-bc\\bc-ad&0\end{pmatrix}=(ad-bc)J$. Thus $A^TJA=J$ forces $ad-bc=\det A=1$ by the $(1,2)$ entry. Taking determinants alone would leave a sign ambiguity: the reflection $R=\operatorname{diag}(-1,1)$ has $(\det R)^2=1$ but $R^TJR=-J$, so it does not preserve the form. This online coordinate proof postdates the retained draft PDF.

**Exercise 3 (F).** Harmonic oscillator with $H = \frac{1}{2}(p^{2} + q^{2})$; find the Hamiltonian flow and verify $\phi_{t}^{*}\omega = \omega$.

> **Solution.** $q(t) = q_{0}\cos t + p_{0}\sin t$, $p(t) = -q_{0}\sin t + p_{0}\cos t$. In the usual oriented $(q,p)$ plane, $M(t)=\begin{pmatrix}\cos t & \sin t \\ -\sin t & \cos t\end{pmatrix}$ is rotation by $-t$: $(1,0)$ reaches $(0,-1)$ at $t=\pi/2$. Since $\det M(t)=\cos^2t+\sin^2t=1$, $\phi_{t}^{*}\omega = \omega$. This online sign correction postdates the retained draft PDF.

**Exercise 4 (P).** Prove the Leibniz rule $\{fg, h\} = f\{g, h\} + g\{f, h\}$.

> **Solution.** Expand $\partial(fg)/\partial q_{i} = f\partial g/\partial q_{i} + g\partial f/\partial q_{i}$ and similarly for $p_{i}$. Substitute into the definition of $\{\cdot, \cdot\}$ and collect terms.

**Exercise 5 (F).** Torus $T^{2}$ with $\omega = d\theta \wedge d\phi$; compute total symplectic volume.

> **Solution.** $\int_{0}^{2\pi}\int_{0}^{2\pi}d\theta\,d\phi = 4\pi^{2}$.

---

## Chapter 5: Lie Groups and Symmetry

**Exercise 1 (P).** Show $\mathfrak{so}(3)$ consists of antisymmetric matrices and that the commutator of two antisymmetric matrices is antisymmetric.

> **Solution.** Differentiate $A^{T}A = I$ at $A = I$ to get $X^{T} + X = 0$. For antisymmetric $X, Y$: $[X, Y]^{T} = Y^{T}X^{T} - X^{T}Y^{T} = (-Y)(-X) - (-X)(-Y) = YX - XY = -[X, Y]$.

**Exercise 2 (F).** Compute $\exp(\theta J)$ for $J = \begin{pmatrix}0 & -1\\ 1 & 0\end{pmatrix}$.

> **Solution.** $J^{2} = -I$, so $\exp(\theta J) = I\cos\theta + J\sin\theta = \begin{pmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{pmatrix}$.

**Exercise 3 (F).** Particle in central potential; show $SO(3)$ invariance and identify moment map components.

> **Solution.** $|R\mathbf{r}| = |\mathbf{r}|$ and $(R\mathbf{p})^{2} = \mathbf{p}^{2}$ imply $H$ is invariant. The moment map is $\mathbf{L} = \mathbf{r} \times \mathbf{p}$ with components $L_{x} = yp_{z} - zp_{y}$, $L_{y} = zp_{x} - xp_{z}$, $L_{z} = xp_{y} - yp_{x}$.

**Exercise 4 (P).** Show $\{L_{i}, L_{j}\} = \sum_{k}\epsilon_{ijk}L_{k}$.

> **Solution.** Direct computation: $\{L_{x}, L_{y}\} = \{yp_{z} - zp_{y}, zp_{x} - xp_{z}\} = xp_{y} - yp_{x} = L_{z}$. Cyclic permutation gives the remaining components.

**Exercise 5 (T).** $U(1)$ action on $\mathbb{C}$ by phase multiplication; find the moment map.

> **Solution.** The action is rotation in the $(x, y)$ plane. The infinitesimal generator is $\xi_{M} = (-y, x)$. Then $\iota_{\xi_{M}}\omega = -y\,dy - x\,dx = -\frac{1}{2}d(x^{2} + y^{2})$. The moment map is $\mu = -\frac{1}{2}|z|^{2}$ (up to an additive constant).

---

## Chapter 6: Integrable Systems

**Exercise 1 (P).** One-dimensional system $H = p^{2}/(2m) + V(q)$; under what conditions is it integrable?

> **Solution.** A one-degree-of-freedom system always has energy as a conserved quantity. Since $n = 1$, this suffices for Liouville integrability for any $V(q)$, though the motion need not be periodic.

**Exercise 2 (F).** Particle in a box; compute action-angle variables.

> **Solution.** $I = \frac{L\sqrt{2mE}}{\pi}$, so $E = \pi^{2}I^{2}/(2mL^{2})$. The frequency is $\omega = \partial E/\partial I = \pi^{2}I/(mL^{2}) = \pi v/L$, giving period $T = 2L/v$.

**Exercise 3 (P).** Verify that the Laplace--Runge--Lenz vector $\mathbf{A} = \mathbf{p} \times \mathbf{L} - \mu k\mathbf{r}/r$ is conserved for the Kepler problem.

> **Solution.** Compute $d\mathbf{A}/dt$ using $\dot{\mathbf{L}} = 0$, $\dot{\mathbf{p}} = -k\mathbf{r}/r^{3}$, and $\mu\dot{\mathbf{r}} = \mathbf{p}$. The terms cancel after vector algebra, giving $d\mathbf{A}/dt = \mathbf{0}$.

**Exercise 4 (T).** Pendulum with slowly shortened length; find amplitude change.

> **Solution.** Adiabatic invariance of $I = E/\omega$ gives $\ell_{0}^{3/2}\theta_{0}^{2} = \ell_{1}^{3/2}\theta_{1}^{2}$, so $\theta_{1} = \theta_{0}(\ell_{0}/\ell_{1})^{3/4}$.

**Exercise 5 (F).** Show $\{A_{x}, L_{z}\} = -A_{y}$.

> **Solution.** Since $\{f, L_{z}\} = \partial f/\partial\phi$ generates rotations about $z$, and $A_{x}$ transforms as the $x$-component of a vector, $\{A_{x}, L_{z}\} = -A_{y}$.

---

## Chapter 7: Perturbation Methods

**Exercise 1 (F).** Poincaré--Lindstedt for $\ddot{q} + q + \epsilon q^{2} = 0$; find frequency correction to $O(\epsilon)$.

> **Solution.** At $O(\epsilon)$, the secular term coefficient is $2\omega_{1}A$. Setting $\omega_{1} = 0$ removes it. The frequency correction is $O(\epsilon^{2})$.

**Exercise 2 (F).** Method of averaging for $\dot{x} = \epsilon x\sin^{2}t$.

> **Solution.** $\overline{\sin^{2}t} = 1/2$, so $\dot{\bar{x}} = \epsilon\bar{x}/2$ and $\bar{x}(t) = x_{0}e^{\epsilon t/2}$.

**Exercise 3 (T).** Hamiltonian $H = \frac{1}{2}(p^{2} + q^{2}) + \epsilon q^{4}$; first-order frequency shift.

> **Solution.** In action-angle variables, $q = \sqrt{2I}\sin\phi$. Averaging $\sin^{4}\phi$ gives $3/8$. The corrected Hamiltonian is $K(I) = I + \frac{3}{2}\epsilon I^{2}$, so $\omega = 1 + 3\epsilon I$.

**Exercise 4 (P).** Why does KAM require nondegeneracy $\det(\partial^{2}H_{0}/\partial I_{i}\partial I_{j}) \neq 0$?

> **Solution.** Nondegeneracy ensures the frequency map $I \mapsto \omega(I)$ is a local diffeomorphism, allowing the Diophantine condition to be imposed on frequencies. Without it, all tori could share the same frequencies and perturbation theory could not distinguish resonant from nonresonant tori.

**Exercise 5 (T).** Weakly damped oscillator $\ddot{q} + 2\gamma\dot{q} + \omega_{0}^{2}q = 0$ with $\gamma \ll \omega_{0}$; approximate solution.

> **Solution.** Averaging gives $\dot a=-\gamma a$, $\dot b=-\gamma b$, so $q(t)\approx Ae^{-\gamma t}\cos(\omega_0t+\phi)$. Since the omitted frequency shift is $-\gamma^2/(2\omega_0)+\cdots$, its phase stays small for $t\ll\omega_0/\gamma^2$; the envelope is useful on $t=O(1/\gamma)$.

---

## Chapter 8: Rigid Body Dynamics

**Exercise 1 (F).** Principal moments of a uniform solid sphere.

> **Solution.** By symmetry, all principal moments are equal: $I = \frac{2}{5}MR^{2}$.

**Exercise 2 (F).** Rectangular box with sides $a, b, c$; principal moments about center.

> **Solution.** $I_{1} = \frac{M}{12}(b^{2} + c^{2})$, $I_{2} = \frac{M}{12}(a^{2} + c^{2})$, $I_{3} = \frac{M}{12}(a^{2} + b^{2})$.

**Exercise 3 (P).** Free symmetric top; show $L^{2}$ and $T$ are conserved.

> **Solution.** With $I_{1} = I_{2}$, Euler's equations give $\dot{L}_{1}$ and $\dot{L}_{2}$ proportional to $L_{2}L_{3}$ and $L_{3}L_{1}$. Then $\dot{L}^{2} = 2(L_{1}\dot{L}_{1} + L_{2}\dot{L}_{2}) = 2L_{1}L_{2}L_{3}(1/I_{3} - 1/I_{2} + 1/I_{1} - 1/I_{3}) = 0$. Since $L^{2}$ and $L_{3}$ are conserved, $T = (L^{2} - L_{3}^{2})/(2I_{1}) + L_{3}^{2}/(2I_{3})$ is also conserved. This online rate-sign correction postdates the retained draft PDF.

**Exercise 4 (T).** Figure skater pulls arms in; find final angular velocity and discuss energy.

> **Solution.** Angular momentum conservation: $I_{i}\omega_{i} = I_{f}\omega_{f}$, so $\omega_{f} = (I_{i}/I_{f})\omega_{i}$. Kinetic energy changes from $T_{i} = I_{i}\omega_{i}^{2}/2$ to $T_{f} = (I_{i}/I_{f})T_{i} > T_{i}$. The skater does work by pulling inward.

**Exercise 5 (T).** Heavy symmetric top; condition for steady precession.

> **Solution.** For a nonvertical steady motion, $\theta=\theta_{0}$ is constant and the $\theta$ equation gives
> $$I_{1}\cos\theta_{0}\,\dot{\phi}^{2}-p_{\psi}\dot{\phi}+Mgl=0.$$
> Thus the allowed constant precession rates are the real roots of this quadratic (with the linear limiting case handled when $\cos\theta_{0}=0$). The other conserved momentum must then satisfy $p_{\phi}=p_{\psi}\cos\theta_{0}+I_{1}\dot{\phi}\sin^{2}\theta_{0}$. These two relations, together with a nonnegative quadratic discriminant where applicable, give the requested steady-precession condition.

---

## Chapter 9: Field Theory Action

**Exercise 1 (F).** Complex scalar field; derive Euler--Lagrange equation.

> **Solution.** Varying $\phi^{*}$ independently gives $(\partial_{\mu}\partial^{\mu} + m^{2})\phi = 0$.

**Exercise 2 (P).** Show electromagnetic action is gauge invariant.

> **Solution.** $F_{\mu\nu}$ is invariant because mixed partials commute. Current conservation rewrites the source variation as the divergence $\partial_\mu(\Lambda J^\mu)$; suitable boundary conditions then make its integrated boundary term vanish.

**Exercise 3 (T).** Energy density for plane-wave Klein--Gordon solution.

> **Solution.** For $\phi = A\cos(k \cdot x)$, averaging over a period gives $\langle T^{00}\rangle = \frac{A^{2}}{2}k_{0}^{2} > 0$.

**Exercise 4 (F).** Static scalar field in one dimension; show $\phi'' = dV/d\phi$.

> **Solution.** With $\dot{\phi} = 0$, the Euler--Lagrange equation reduces to $\phi'' = dV/d\phi$, the equation for a particle in potential $-V$ with spatial coordinate playing the role of time.

**Exercise 5 (T).** Proca theory; derive field equations and show $\partial_{\mu}A^{\mu} = 0$.

> **Solution.** Varying gives $\partial_{\mu}F^{\mu\nu} + m^{2}A^{\nu} = 0$. Taking $\partial_{\nu}$ and using antisymmetry of $F^{\mu\nu}$ yields $m^{2}\partial_{\nu}A^{\nu} = 0$, so for $m \neq 0$ the divergence vanishes.

---

## Chapter 10: Noether's Theorem in Field Theory

**Exercise 1 (P).** Complex scalar field with $\phi^{4}$ interaction; show $U(1)$ current is conserved.

> **Solution.** Using the equations of motion, $\partial_{\mu}j^{\mu} = i(\phi\partial_{\mu}\partial^{\mu}\phi^{*} - \phi^{*}\partial_{\mu}\partial^{\mu}\phi) = i\phi(-m^{2}\phi^{*} - 2\lambda\phi\phi^{*2}) - i\phi^{*}(-m^{2}\phi - 2\lambda\phi^{*}\phi^{2}) = 0$.

**Exercise 2 (T).** Electromagnetic energy-momentum tensor; show $T^{00} = \frac{1}{2}(\mathbf{E}^{2} + \mathbf{B}^{2})$ and $T^{0i} = (\mathbf{E} \times \mathbf{B})_{i}$.

> **Solution.** From $\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$, the canonical tensor gives $T^{00} = \frac{1}{2}(\mathbf{E}^{2} + \mathbf{B}^{2})$ and $T^{0i} = (\mathbf{E} \times \mathbf{B})_{i}$ after symmetrization (Belinfante improvement).

**Exercise 3 (C).** Free scalar field ($m = 0$); does $T^{\mu}_{\phantom{\mu}\mu} = 0$?

> **Solution.** For the canonical massless scalar tensor, $T^{\mu}_{\phantom{\mu}\mu}=-\partial^\mu\phi\partial_\mu\phi$, which is not zero in general even on shell. Adding the standard improvement term in four dimensions gives a tensor whose trace vanishes on shell.

**Exercise 4 (F).** Two real scalar fields with $SO(2)$ symmetry; find conserved current.

> **Solution.** Under infinitesimal rotation, $\delta\phi_{1} = -\alpha\phi_{2}$ and $\delta\phi_{2} = \alpha\phi_{1}$. The Noether current for this displayed generator is $j^{\mu} = \phi_{1}\partial^{\mu}\phi_{2} - \phi_{2}\partial^{\mu}\phi_{1}$. The opposite generator gives the negative current; both signs are conserved on shell. This online normalization correction postdates the retained draft PDF.

**Exercise 5 (P).** Why must the gauge-theory energy-momentum tensor be gauge invariant?

> **Solution.** Physical observables must be gauge invariant. The canonical tensor depends on $\partial_{\nu}A_{\lambda}$, which is not gauge invariant. With the book's mostly-minus metric convention, the symmetric electromagnetic tensor is $T^{\mu\nu} = -F^{\mu\lambda}F^{\nu}_{\phantom{\nu}\lambda} + \frac{1}{4}g^{\mu\nu}F_{\lambda\sigma}F^{\lambda\sigma}$; it is manifestly gauge invariant and gives positive energy density.

---

## Chapter 11: Geometric Numerical Integration

**Exercise 1 (P).** Show explicit Euler for harmonic oscillator is not symplectic.

> **Solution.** The Jacobian of the one-step map is $\begin{pmatrix}1 & h\\ -h & 1\end{pmatrix}$ with determinant $1 + h^{2} \neq 1$. Symplecticity requires determinant $1$.

**Exercise 2 (F).** Stormer--Verlet for pendulum $\ddot{\theta} + \sin\theta = 0$; verify approximate energy conservation.

> **Solution.** With $\theta_0=\pi/2$ and $p_0=0$, direct expansion gives the unusually small one-step defect $E_1-E_0=-h^6/24+O(h^{10})$. This cancellation at one initial state does not by itself prove global second-order convergence.

**Exercise 3 (P).** Prove Stormer--Verlet is time-reversible.

> **Solution.** Applying the method with step $-h$ from $(q_{n+1}, p_{n+1})$ recovers $(q_{n}, p_{n})$ by direct substitution into the three-step update formula.

**Exercise 4 (T).** Modified Hamiltonian for symplectic Euler-A to $O(h)$.

> **Solution.** Expanding the map and matching with a modified Hamiltonian flow gives $\tilde{H} = H - \frac{h}{2m}pV'(q) + O(h^{2})$.

**Exercise 5 (T).** Why are symplectic integrators important for solar-system simulations?

> **Solution.** Symplectic methods preserve the symplectic form and often suppress secular numerical energy drift. Backward-error analysis can relate a finite-time computation to a nearby modified Hamiltonian under suitable hypotheses, but it does not guarantee preservation of every KAM torus, resonance, or orbital boundedness over billions of years.

---

## Chapter 12: Synthesis: The Unity of the Action Principle

**Exercise 1 (T).** Summarize logical dependencies among chapters for gauge symmetry.

> **Solution.** The prerequisite chain is: *From a Path to a Number* $\to$ *Constraints and Lagrange Multipliers* $\to$ *Hamilton--Jacobi Theory* $\to$ *Symplectic Geometry* $\to$ *Lie Groups and Symmetry* $\to$ *Field Theory Action* $\to$ *Noether's Theorem in Field Theory*. Gauge symmetry requires the action principle, field theory, and internal symmetries.

**Exercise 2 (P).** Explain classical emergence from the Feynman path integral via stationary phase.

> **Solution.** Stationary phase organizes suitable finite-dimensional oscillatory integrals around nondegenerate critical points. Its formal path-integral analogue places paths with $\delta S=0$ at leading semiclassical order, but a specific infinite-dimensional theory still needs a constructed or regularized measure.

**Exercise 3 (T).** Instanton for double-well potential in imaginary time.

> **Solution.** In Euclidean time the equation is $q''=q(q^2-1)$. The increasing zero-energy branch satisfies $q'=(1-q^2)/\sqrt2$, whose integral is $q(\tau)=\tanh((\tau-\tau_0)/\sqrt2)$.

**Exercise 4 (P).** Higgs mechanism: mass for gauge bosons while preserving gauge symmetry.

> **Solution.** The action remains gauge invariant. Choosing a vacuum representative with $\langle\phi\rangle\ne0$ leaves an unbroken subgroup, and expansion about it produces masses for the appropriate gauge bosons. “Breaking the gauge symmetry” is shorthand; the gauge redundancy is not a physical global symmetry that disappears.

**Exercise 5 (T).** Why has the solar system remained stable for billions of years?

> **Solution.** KAM persistence needs quantitative smallness, nondegeneracy, and nonresonance hypotheses; the mass ratio alone does not place the actual Solar System on a surviving torus. Long-time symplectic computations provide model-dependent finite-time evidence, not proof of perpetual stability.
