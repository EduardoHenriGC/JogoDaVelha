import styles from "../styles/MainContainer/MainContainer.module.css"



export default function MainContainer({ children }) {
  return <div className={styles.mainContainer}>{children}</div>
}
