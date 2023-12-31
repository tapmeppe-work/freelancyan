import Row, { Col } from '@abcd/Row'
import Image from '@abcd/Image'
import CircleCheck from '@icons/CircleCheck'
import Question from '@icons/Question'
import HandHolding from '@icons/HandHolding'
import HandHoldingMedical from '@icons/HandHoldingMedical'
import HandHoldingDroplet from '@icons/HandHoldingDroplet'
import Card from './Card'
import './Columns.css'
import type Properties from './Columns.properties'
import Model from './Columns.model'
import Section from '@abcd/Section'
import { H2 } from '@abcd/Headline'

export default (props: Properties) => <Section>
	{new Model(
		props,
		className => <Question class={className} style={Model.design['7.5']} />,
		{
			bronze: () => <HandHolding />,
			silver: () => <HandHoldingMedical />,
			gold: () => <HandHoldingDroplet />,
		}
	).render(
		headline => <H2>{headline}</H2>,
		(className, columns) => <Row class={className}>{columns}</Row>,
		(className, content) => <div class={className}>{content}</div>,
		(className, identifier, illustration, details) => <Card
			class={className}
			identifier={identifier}
			details={details}
			div
		>{illustration}</Card>,
		(className, src, alt) => <Image class={className} src={src} alt={alt} />,
		(classNames, svg) => <div class={classNames.abcd}>
			<span class={classNames.span}>{svg}</span>
		</div>,
		(className, content) => <ul class={className}>{content}</ul>,
		(className, content) => <li class={className}>
			{content}
		</li>,
	)}
</Section>
