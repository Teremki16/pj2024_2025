using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;

 public class Ptichka : MonoBehaviour
{
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter destination;
    [SerializeField] GameObject target;
    private void Update()
    {
        float distance = Vector2.Distance(transform.position, target.transform.position);
        if(distance < 5)
        {
            destination.enabled = true;
            patrol.enabled = false;
        }
        else
        {
            destination.enabled = false;
            patrol.enabled = true;
        }
    }

}