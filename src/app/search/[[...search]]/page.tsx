import { m } from "@/paraglide/messages";
import { getLocale, localizeHref, localizeUrl } from "@/paraglide/runtime";
import { redirect } from "next/navigation";

const TRANSACTIONS = [
  {
    id: "buy",
    slugs: { en: "buy", de: "kaufen" },
  },
];

const TYPES = [
  {
    id: "home",
    slugs: {
      en: "homes",
      de: "hauser",
    },
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{
    search?: string[];
  }>;
}) {
  const { search } = await params;

  const transactionSlug = search?.[0];
  const typeSlug = search?.[1];

  if (!transactionSlug || !typeSlug) {
    return (
      <>
        <h1>{m.search()}</h1>
      </>
    );
  }

  const locale = getLocale();

  const transaction = TRANSACTIONS.find((t) =>
    Object.values(t.slugs as Record<string, string>).includes(transactionSlug)
  );

  const type = TYPES.find((t) =>
    Object.values(t.slugs as Record<string, string>).includes(typeSlug)
  );

  console.log(locale, transaction, type);

  if (!transaction || !type) {
    redirect("/search");
  }

  if (
    transaction?.slugs[locale] !== transactionSlug ||
    type?.slugs[locale] !== typeSlug
  ) {
    const path = `/search/${transaction?.slugs[locale]}/${type?.slugs[locale]}`;

    redirect(localizeHref(path));
  }

  return (
    <>
      <h1>
        {m.search()} {transaction?.slugs[locale]} {type?.slugs[locale]}
      </h1>
    </>
  );
}
