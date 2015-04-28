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



Execution
---------
This program takes the following steps:

1.  All people who can drive are assigned to their own car.  Depending on how costs are calculated, many of these
    vehicles are likely to be eliminated later.
2.  All people who cannot drive are assigned to the car that, at the time, would have the greatest cost benefit by that
    particular person being added to that particular car.
3.  Experiments are conducted in which the most expensive cars are eliminated (if enough empty seats are available).
    Those eliminations that do not result in a cost reduction are reverted.
4.  Experiments are conducted that focus on the most expensive cars, in which seats are switched with other vehicles.
    The switches that do not result in a cost reduction are reverted.
5.  A revisit of steps 3 and 4 that's hopefully somewhat intelligent.
6.  The assignment is deemed "good enough" and we start driving.



Major Assumptions
-----------------
(that we've realized we're making):

1.  Personal preferences of participants can be generalized to the mathematical models being employed here.
2.  Adding a person to one car without changing the composition of any other car will not result in any change to the
    costs of any other car.
3.  All cars being used travel from the origin of their driver, to the destination. (Cars do not meet and combine at
    some mid-point.)



Example Cost Factors
--------------------
While financial costs of mileage and/or reimbursement are obvious costs, they are not the only costs associated with
carpools.  There are also significant social costs at stake for the people who are spending several hours in a confined
space with other people, and, should the carpool assignments be miserable for some party, there are significant
potential political and popularity costs carried by those responsible for the carpool assignments.  Thus, we invite the
carpool planner to consider the following cost factors, all of which are relatively easy to generalize and model.

-   Mileage, either per person or per vehicle.  We typically recommend using this as the fundamental cost.
-   The Driver's Desire to Drive.  When we calculate carpools, we always ask--in addition to the number of seats a
    driver has--how much they want to drive.  For some, driving is a pleasant experience, but for others it can be a
    significant cause of stress.  While we make no promises that drivers will get their will in these matters, we find
    it beneficial to consider.
-   Sexual Composition.  It has been our experience that most (though, admittedly, not all) drama-inducing scenarios are
    across the gender line.  By preferring single-gender cars, we can somewhat reduce the angst.
-   Over-Crowding and Loneliness.  While a full car may be the most efficient in terms of vehicle mileage, it often
    means uncomfortable passengers, and insufficient space for luggage.  Similarly, someone driving alone is prone to
    loneliness in a long drive.  We suggest vehicles about 80% full as a reasonable ideal. (So, 2/2, 3/3, 4/4, 4/5,
    5/6...)