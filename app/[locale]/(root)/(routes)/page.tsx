import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");
  return (
    <main>
      <div>{t("title")}</div>
    </main>
  );
}
