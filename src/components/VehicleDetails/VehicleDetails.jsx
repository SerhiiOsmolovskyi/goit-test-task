export default function VehicleDetails({
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) {
  const addSpace = (string) => {
    return string.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2");
  };
  return (
    <>
      <div>
        <h3>Vehicle details</h3>
        <ul>
          <li>
            <p>Form</p>
            <p>{form}</p>
          </li>
          <li>
            <p>Length.</p>
            <p>{addSpace(length)}</p>
          </li>
          <li>
            <p>Width</p>
            <p>{addSpace(width)}</p>
          </li>
          <li>
            <p>Height</p>
            <p>{addSpace(height)}</p>
          </li>
          <li>
            <p>Tank</p>
            <p>{addSpace(tank)}</p>
          </li>
          <li>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
