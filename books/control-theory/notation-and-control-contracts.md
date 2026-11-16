
# Notation and Control Contracts

Continuous state-space notation is $x'=Ax+Bu$, $y=Cx+Du$. State, input and output dimensions must make every product meaningful. The direct-feedthrough matrix affects the measured output and must be included when forming an observer innovation. Discrete-time models use a subscript and an explicitly declared sampling interval.

A stable continuous-time matrix has eigenvalues with negative real part. A stable discrete-time matrix has eigenvalues strictly inside the unit circle. These criteria are not interchangeable. A sampled closed-loop model also depends on how inputs are held between measurements and on any delay.

State feedback uses $u=-Kx$; an observer uses gain $L$ in the output innovation. Switching sign conventions changes the displayed closed-loop matrix. Derive the actual matrix before comparing eigenvalues or gains across sources.

A reachability Gramian concerns an input-energy norm and a fixed horizon. An observability Gramian concerns an output-energy norm. Both depend on coordinates and units, even when their ranks express invariant properties. An inverse Gramian formula requires positive definiteness; near singularity its numerical use needs a separate conditioning analysis.

For optimal control, state the horizon, terminal cost and constraints before the Hamiltonian convention. A minimising convention determines the adjoint signs. A necessary Pontryagin condition is not sufficient for a global optimum without additional structure. An HJB verification statement needs regularity, admissible feedback and a valid terminal or transversality condition.

Robustness names the uncertainty set, norm, interconnection and well-posedness assumptions. A nominal gain margin does not certify every unmodelled effect. Numerical and physical limits remain separate from the exact finite-dimensional theorem.
