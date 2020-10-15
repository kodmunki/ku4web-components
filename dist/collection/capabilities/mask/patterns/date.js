/**
 * A pattern to use for ku4-mask when a date pattern is desired.
 * This will only work for mm/dd/yyyy templates. It is advised
 * that this not be edited other than on lines 24+ where the
 * year rules are defined.
 */

export const mm_dd = ',[01],(((?<=0)[1-9])|((?<=1)[0-2])),(((?<=(1[0-2]/))[0-3])|((?<=(0[^2]/))[0-3])|((?<=(02/))[0-2])),(((?<=/[0-2])[0-9])|((?<=/3)[01]))'
export const _1900_2199 = `,[12],(((?<=/../1)9)|((?<=/../2)[01]))`
export const _1900_2999 = `,[12],(((?<=/../1)9)|((?<=/../2)[0-9]))`

/**
 * The following is an expanded for of the expression above.
 * This is done to compress the expression for export. This
 * could be scripted in the future.
 */
/*
export default `
  ,
  [01],
  (
    ((?<=0)[1-9])|
    ((?<=1)[0-2])
  ),
  (
    ((?<=(1[0-2]/))[0-3])|
    ((?<=(0[^2]/))[0-3])|
    ((?<=(02/))[0-2])
  ),
  (
    ((?<=/[0-2])[0-9])|
    ((?<=/3)[01])
  ),
  [12],
  (
    ((?<=/../1)9)|
    ((?<=/../2)[01])
  )
`
 */
