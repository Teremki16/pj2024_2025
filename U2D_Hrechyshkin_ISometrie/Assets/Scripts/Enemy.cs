using Pathfinding;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter destination;
    [SerializeField] GameObject target;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float distance = Vector2.Distance(transform.position, target.transform.position);
        if(distance < 5f)
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
