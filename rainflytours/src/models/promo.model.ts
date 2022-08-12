import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type PromoModel = {
    fields: {
        Headline: Field<string>;
        SubHeadline: Field<string>;
        Copy: Field<string>;
        Photo: ImageField;
        ActionLink: LinkField;
    };
};
