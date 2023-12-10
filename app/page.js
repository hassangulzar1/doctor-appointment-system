import classes from "./home.module.css";
import ButtonClient from "@/components/buttonOnClient/ButtonClient";
export default async function Home() {
  return (
    <div className={classes.mainDiv}>
      <ButtonClient />
    </div>
  );
}
