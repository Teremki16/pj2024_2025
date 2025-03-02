using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;

public class EnemyComtroller : MonoBehaviour
{
    [SerializeField] GameObject player;
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter ai;
    void Start()
    {
        
    }

    
    void Update()
    {
        float waytoplayer = Vector3.Distance(transform.position, player.transform.position);
        if(waytoplayer<=2.5f)
        {
            patrol.enabled = false;
            ai.enabled = true;
        }
        if(waytoplayer>5f)
        {
            patrol.enabled = true;
            ai.enabled = false;
        }
    }
}
