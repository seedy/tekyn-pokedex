const filterOptions = (value = '', options: string[]) => options.filter((option) =>
  option.toLowerCase().startsWith(value?.toLowerCase() || "")
)

export default filterOptions