import React from 'react'
import Sidebar from 'components/Sidebar'
import Grid from 'components/Grid'
import CheckButton from 'components/CheckButton'
import classes from './HomeView.scss'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// export const HomeView = () => (
//   <div className={classes.container}>
//     <div className={classes.title}>Marker checker 3000</div>
//     <div className={classes.caption}>Place markers on their positions and press check to get the answer!</div>
//     <div className={classes.grid}>
//       <Grid />
//     </div>
//     <div className={classes.buttonBlock}>
//       <CheckButton />
//     </div>
//   </div>
// )

// ---
// Component
// ---
class HomeView extends React.Component {

  render () {
    return (
      <div className={classes.container}>
        <Sidebar />

        <div className={classes.title}>Marker checker 3000</div>
        <div className={classes.caption}>Place markers on their positions and press check to get the answer!</div>
        <div className={classes.grid}>
          <Grid />
        </div>
        <div className={classes.buttonBlock}>
          <CheckButton />
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(HomeView)
