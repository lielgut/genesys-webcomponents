import { IGuxAccordionLegacySection } from './gux-accordion.types';

function getSectionByName(
  slotName: string,
  sections: IGuxAccordionLegacySection[]
): IGuxAccordionLegacySection {
  return sections.find(section => section.slotName === slotName);
}

function getPreviousSection(
  slot: string,
  sections: IGuxAccordionLegacySection[]
): HTMLElement {
  const currentIndex = sections.findIndex(section => section.slotName === slot);

  if (currentIndex <= 0) {
    return sections[sections.length - 1].ref;
  }

  return sections[currentIndex - 1].ref;
}

function getNextSection(
  slot: string,
  sections: IGuxAccordionLegacySection[]
): HTMLElement {
  const currentIndex = sections.findIndex(section => section.slotName === slot);

  if (currentIndex >= sections.length - 1) {
    return sections[0].ref;
  }

  return sections[currentIndex + 1].ref;
}

function getFirstSection(sections: IGuxAccordionLegacySection[]): HTMLElement {
  return sections[0].ref;
}

function getLastSection(sections: IGuxAccordionLegacySection[]): HTMLElement {
  return sections[this.sections.length - 1].ref;
}

function getToggleButton(section: HTMLElement): HTMLElement {
  return section.querySelector('.gux-header-button');
}

export function getSections(root: HTMLElement): IGuxAccordionLegacySection[] {
  const children = Array.from(root.children) as HTMLElement[];
  const sections: IGuxAccordionLegacySection[] = [];

  children.forEach(element => {
    const slotName = element.getAttribute('slot');

    element.hidden = !Boolean(slotName);

    if (slotName) {
      sections.push({
        slotName,
        ref: null
      });
    }
  });

  return sections;
}

export function modifyClassList(
  slotName: string,
  modification: 'add' | 'remove' | 'toggle',
  sections: IGuxAccordionLegacySection[]
): void {
  const section = getSectionByName(slotName, sections);

  section?.ref.classList[modification]('gux-opened');
}

export function onKeyboardNavigation(
  event: KeyboardEvent,
  slotName: string,
  sections: IGuxAccordionLegacySection[]
): void {
  let newSection: HTMLElement;

  switch (event.key) {
    case 'ArrowUp':
      newSection = getPreviousSection(slotName, sections);
      break;
    case 'ArrowDown':
      newSection = getNextSection(slotName, sections);
      break;
    case 'End':
      newSection = getLastSection(sections);
      break;
    case 'Home':
      newSection = getFirstSection(sections);
      break;
  }

  if (newSection) {
    getToggleButton(newSection).focus();
  }
}
