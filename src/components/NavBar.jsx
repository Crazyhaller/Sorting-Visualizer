import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { sortingAlgorithms } from '../common/config'
import { useData } from '../common/store'
import shallow from 'zustand/shallow'
import { AiFillGithub } from 'react-icons/ai'

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export function NavBar() {
  const classes = useStyles()

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  )

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: 'rgb(207, 180, 219)' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginRight: '5px' }}>Sorting Visualizer</h3>
        <a
          href="https://github.com/Crazyhaller/Sorting-Visualizer"
          target="_blank"
        >
          <AiFillGithub style={{ fontSize: '1.5rem' }} />
        </a>
      </div>
      <AppBar position="static" color="secondary">
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="primary"
          textColor="black"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(0)}
              key={algorithm.title}
            />
          ))}
          <Tab label="All" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
    </div>
  )
}
