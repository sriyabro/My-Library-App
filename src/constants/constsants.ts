export const selectorBorderColorValue = "#A5A5A5";

export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: `2px solid ${selectorBorderColorValue}`,
    borderRadius: '0px',
  }),
}