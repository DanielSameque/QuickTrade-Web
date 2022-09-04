//tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7]
const dobro = numbers.map(numbers => numbers * 2)
// console.log(dobro);

// const ListaDeNumeros = () => {
//   const numbers = [1, 2, 3, 4, 5];
// }
{
  /* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */
}

console.log(arrayTab.at(-1))

{
  /* <TabPanel value={value} index={0}>
        Item Um
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */
}

{
  /* {tabTotais.map((tab) => <TabPanel value={value} index={tab}><Contas /></TabPanel>)} */
}
