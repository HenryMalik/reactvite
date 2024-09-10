import styles from "./index.module.css"

const Register = () => {
    return (
    <body>
        <div className={styles.container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" required />
            <input type="submit" value="Sign Up" />
        </div>
        </body>
    )
}

export default Register