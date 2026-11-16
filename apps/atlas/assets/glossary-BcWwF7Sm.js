var e=`---
parent_id: book-time-series
chapter_id: glossary
title: Notation and Glossary
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Notation and Glossary

**Origin:** the latest time n available when a forecast is issued. **Horizon:** the number h of future observation intervals from that origin. **Lag:** an integer displacement in the declared regular time index. **Seasonal period:** a stated number m of observations per cycle. **Weak stationarity:** constant mean and covariance depending only on lag, with finite second moments. **Strict stationarity:** invariance of every finite-dimensional law under common time shifts.

**Autocovariance:** gamma(h)=Cov(X_t,X_{t+h}) for a weakly stationary process. **Autocorrelation:** rho(h)=gamma(h)/gamma(0) when the variance is positive. **Innovation:** the new shock in a recursive model; orthogonality, independence and Gaussianity are separate assumptions. **ARMA:** autoregressive moving-average relation for a stationary centred series. **ARIMA:** an ARMA relation applied after a declared number of differences.

**Forecast error:** target minus origin-specific forecast. **Prediction interval:** an interval for a future observation under a stated probabilistic model or calibration method. **Periodogram:** a finite-sample squared Fourier transform with a declared normalisation. **State space:** a latent-state transition and observation pair. **Conditional variance model:** a process in which the next innovation variance can depend on past information. **Cointegration:** a stationary linear combination of components whose individual levels are integrated under the stated order.

Symbols and signs follow the [reader guide](../front-matter/reader-guide.md). Every occurrence of spectral frequency gives cycles per observation interval; angular frequency is separately identified if used. Conditional expectation E[.|F_n] presumes the information available at origin n, and Var(.) denotes variance in squared measurement units.
`;export{e as default};