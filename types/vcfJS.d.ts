declare module 'js.vcf' {
  export default function parseVCards(vCardsText: string): object
  export function parseVCard(vCardText: string): object
}
