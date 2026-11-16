var e=`---
id: book-time-series
title: Time Series
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Time Series

A time series is an ordered sequence of observations. Its ordering changes the mathematical questions: neighbouring errors can be dependent, a seasonal mean can imitate persistence, and a forecast must use only information available at its origin. This book builds those distinctions from probability and regression, then uses them in stationary models, prediction, frequency methods and several extensions.

Start with [Probability: Models, Bounds, and Proofs](probability-models-proofs.md) and [Regression and Generalised Linear Models](regression-and-generalised-linear-models.md), especially their covariance and projection chapters. The [reader guide](time-series/front-matter/reader-guide.md) fixes the time-index, variance and R conventions; the [diagnostic](time-series/front-matter/prerequisite-diagnostic.md) gives short preparation checks. The twelve-chapter source route is complete at Draft status. Independent mathematical review and a current print edition remain pending.

All numerical tables in this book are original illustrative examples created for Euler and shared under this book’s CC BY-SA 4.0 licence. They are not observations from a named external population. R listings are reproducible teaching recipes for a fresh base-R session; no result is asserted to have been produced by executing code during this source-authoring pass. The [source and data guide](time-series/back-matter/sources-and-data.md) separates proof inputs from examples.

## Reading route

The route will cover trends and seasonality, stationary covariance, ARMA models, estimation, forecasts, ARIMA selection, spectra, state spaces, volatility, multivariate dependence, long memory, changes and case studies. Follow registered chapter links as they become available.
`;export{e as default};