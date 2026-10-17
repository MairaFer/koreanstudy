import type { Metadata } from "next";
import "./globals.css";
import {SpeechProvider} from "@/components/korean-audio";
import {LocaleProvider} from '@/components/localization';
import {PurpleGarden} from "@/components/purple-garden";

export const metadata: Metadata = {
  title: "BoraLang · Bora aprender coreano com o BTS",
  description: "Aprenda coreano em português: 30 aulas, flashcards, quizzes e músicas do BTS.",
  icons: {
    icon: "/brand/boralang-icon.png",
    shortcut: "/brand/boralang-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased"><LocaleProvider><PurpleGarden/><SpeechProvider>{children}</SpeechProvider></LocaleProvider></body>
    </html>
  );
}
