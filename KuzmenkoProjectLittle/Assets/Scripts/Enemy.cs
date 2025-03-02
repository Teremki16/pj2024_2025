using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;

public class Enemy : MonoBehaviour
{
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter destination;
    [SerializeField] GameObject target;
    void Update()
    {
        float distance = Vector2.Distance(transform.position,
            target.transform.position);
        if (distance < 5f)
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
