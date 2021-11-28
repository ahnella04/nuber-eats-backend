import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createRestaurantDto } from "./dto/create-restaurant.dto";
import { Restaurant } from "./entities/restaurants.entity";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    @Query(returns => Restaurant)
    restaurants(@Args("veganOnly") veganOnly: boolean): Restaurant[] {
        return [];
    }
    @Mutation(returns => Boolean)
    createRestaurant(
       @Args() createRestaurantDto: createRestaurantDto
    ): boolean {
        console.log(createRestaurantDto);
        return true;
    }
}