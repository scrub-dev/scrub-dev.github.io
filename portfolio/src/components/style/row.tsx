import React from 'react'
import styles from '../css/row.module.css'

type RowProps = {
  children: React.ReactNode
}

export const Row: React.FunctionComponent<RowProps> = (props) => <div className={styles.row}> {props.children} </div>
