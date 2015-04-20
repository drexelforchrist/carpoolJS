carpoolJS
=========

CarpoolJS is a program that is designed to assign people to cars for a carpool with a near-optimal result.  A given list
of people coming from given origins can be assigned to vehicles in a particular sequence and combination that minimizes
"cost," however "cost" may be defined by operator.

This is a rewrite of a program written in PHP, embedded in the core code of drexelforchrist.org.  This is designed to
run more efficiently, and to scale better for larger groups.

Theory & Background Mathematics
-------------------------------
This is a combinatorics problem, somewhat similar to the
[Traveling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem).  Like the Traveling Salesman,
The only way to come up with a truly optimal carpool assignment is to try all possible combinations.  With more than
about 30 people involved (especially if they're coming from many origins), this becomes impractical to run on typical
computers in a reasonable amount of time.

This program takes the following steps:

1.  All people who can drive are assigned to their own car.  Depending on how costs are calculated, many of these
    vehicles are likely to be eliminated later.
2.  All people who cannot drive are assigned to the car that, at the time, would have the greatest cost benefit by that
    particular person being added to that particular car.
3.  Experiments are conducted that focus on the most expensive cars, in which seats are switched with other vehicles.
    The switches that do not result in a cost reduction are reverted.


Major Assumptions (that we've realized we're making):

1.  Personal preferences of participants can be generalized to the mathematical models being employed here.
2.  Adding a person to one car does not change the costs of any other car.