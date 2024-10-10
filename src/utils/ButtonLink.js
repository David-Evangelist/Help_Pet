import styles from ‘../style/link_btn.module.css’;

function ButtonLink({ label, onClick }) {
return (
<div>
<button className={styles.linkButton} onClick={onClick}>
<b>{label}</b>
</button>
</div>
);
}

export default ButtonLink;