import { Container } from 'components';
import { SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        {title && <h2 className="title">{title}</h2>}
        {children}
      </Container>
    </SectionWrapper>
  );
};
