import styles from "../styles/Home.module.scss";

const Materials = ({ materials }) => {
  return (
    <>
      <h2 className={styles.heading_h2}>Materials</h2>
      {materials.map((w, key) => {
        return (
          <div className={styles.week_section} key={key}>
            <h2 className={styles.week_header}>{w.week}</h2>
            {w.materials.map((material, key) => {
              if (material.type === "reading") {
                return (
                  <div className={styles.material} key={key}>
                    <a className={styles.material_name} href={material.link}>
                      {material.title}
                    </a>
                    <p className={styles.material_type}>READ</p>
                  </div>
                );
              } else {
                return (
                  <div className={styles.material} key={key}>
                    <a className={styles.material_name} href={material.link}>
                      {material.title}
                    </a>
                    <p className={styles.material_type}>VIDEO</p>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </>
  );
};

export default Materials;
