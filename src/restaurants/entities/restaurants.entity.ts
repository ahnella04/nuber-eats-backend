import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Restaurant {
    @Field(() => String)
    name: string;

    @Field(type => Boolean, { nullable: true })
    isVegan?: boolean;

    @Field(type => String)
    address: string;

    @Field(type => String)
    ownerName: string;
} // Restaurant을 위한 ObjectType 만들기