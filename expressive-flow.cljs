(ns expressive-flow.cljs)

'{:->>   [a b]
  :rules [[:just [:success a] :=?> foo]
          [:just [:success b] :=?> bar]
          [:or   [[:error a]
                  [:error b]] :=!> hello]
          [:and  [foo bar]    :=?> world]]}