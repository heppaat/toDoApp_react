const Checkbox = (props: { checked: boolean; onChange: () => void }) => {
  const { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};

export default Checkbox;
