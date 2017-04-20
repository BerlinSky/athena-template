const rightBox = x =>
({
  chain: f => f(x),
  map: f => rightBox(f(x)),
  fold: (f, g) => g(x),
  log: () => `rightBox(${x})`
})

const leftBox = x =>
({
  chain: f => leftBox(x),
  map: f => leftBox(x),
  fold: (f, g) => f(x),
  log: () => `leftBox(${x})`
})

export const fromNullable = x =>
  x != null ? rightBox(x) : leftBox(null)

export const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}
