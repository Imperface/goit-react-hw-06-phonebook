import { ContactAddForm, ContactsList, Section } from 'components';
import { AppWrapper } from './App.styled';
export const App = () => {
  return (
    <AppWrapper>
      <Section title="Phonebook">
        <ContactAddForm />
      </Section>
      <Section title="Contacts">
        <ContactsList />
      </Section>
    </AppWrapper>
  );
};
