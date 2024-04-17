import NextImage from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Button from './Button';

interface BasicCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  price?: string;
}

export default function BasicCard({ title, description, imageUrl, price }: BasicCardProps) {
  const router = useRouter()
  const purchase = (title: any, price: any) => {
    const product = {
      name: title,
      price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    router.push("/billing") 
  }
  return (
    <Card>
      {imageUrl && <NextImage src={imageUrl} width={128} height={128} alt={title} />}
      <Title>{title}</Title>
     {description && <Description>{description}</Description> }
      <Description>${price}</Description>
      <Button onClick={() => {purchase(title, price)}}>Purchase</Button>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;
