import { Text, RichText, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { PromoModel } from 'src/models/promo.model';

const Promo = (props: PromoModel): JSX.Element => (
    <div>
        <h1>
            <Text field={props.fields.Headline} />
        </h1>
        <RichText field={props.fields.Copy} />
        <Link field={props.fields.ActionLink} />
    </div>
);

export default Promo;
