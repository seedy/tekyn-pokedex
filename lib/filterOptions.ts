const filterOptions = (value = '', options: string[]) => options.filter((option) =>
  option.toLowerCase().includes(value?.toLowerCase() || "")
)

export default filterOptions