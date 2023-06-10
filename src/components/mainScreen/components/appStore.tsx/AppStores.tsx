import AppStoreButton from "./components/AppStoreButton/AppStoreButton";
import styles from "./AppStores.module.scss";

const AppStores = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.button_container}>
          {[
            [
              "chrome",
              "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk",
            ],
            ["apple", "https://apps.apple.com/app/ratepunk/id1607823726"],
          ].map((store) => {
            return <AppStoreButton key={`${store}`} store={store} />;
          })}
        </div>
        <div className={styles.stars_container}>
          <div>
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <span key={`${index}`} className={styles.star}>
                  &#9733;
                </span>
              ))}
            <span className={styles.text_reviews}>Chrome Store reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStores;
